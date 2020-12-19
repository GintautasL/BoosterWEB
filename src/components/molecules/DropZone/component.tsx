import React from 'react'
import Dropzone from 'react-dropzone'
import * as loadImage from 'blueimp-load-image'
import { color } from '../../../theme'
import { Flex } from '../..'
import 'canvas-toBlob'
import config from '../../../config'

interface Props {
  onUpload: Function
  disabled: boolean
  loading: Boolean
  maxPhotos: Number
}

export class DropZone extends React.Component<Props> {
  blobToFile = (theBlob, fileName, type) => {
    theBlob.lastModifiedDate = new Date()
    theBlob.name = fileName
    theBlob.type = type
    return theBlob
  }
  onDrop = acceptedFiles => {
    const { onUpload } = this.props
    const rotatedPhotos = []
    new Promise((resolve, reject) =>
      acceptedFiles.map(image => {
        loadImage(
          image,
          img => {
            if (img.type === 'error') {
              reject()
            } else {
              img.toBlob(blob => {
                this.validateFile(image, blob, reject)
                let fileObj
                try {
                  fileObj = new File([blob], image.name, {type: image.type})
                } catch (err) {
                  fileObj = this.blobToFile(blob, image.name, image.type)
                }
                rotatedPhotos.push(fileObj)
                if (rotatedPhotos.length === acceptedFiles.length) {
                  resolve(rotatedPhotos)
                }
              }, 'image/jpeg')
            }
          },
          {
            maxHeight: 2000,
            contain: true,
            orientation: true,
          },
        )
      }),
    ).then(editedImages => {
      onUpload(editedImages)
    })
  }

  validateFile = (file, blob = null, reject = null) => {
    if (!config.acceptedImageTypes.includes(file.type)) {
      //Error
    } else if (file.size > config.maxImageSize) {
      //Image size too large
    } else if (blob && blob.size > config.maxImageSize) {
      //Bad file size
      reject()
    }
  }

  render() {
    const { disabled, loading, maxPhotos } = this.props
    return (
      <Dropzone
        {...this.props}
        onDrop={this.onDrop}
        maxSize={config.maxImageSize}
        onDropRejected={rejectedFiles =>
          rejectedFiles.forEach(file => this.validateFile(file))
        }
        accept={config.acceptedImageTypes}
        disabled={disabled}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropZoneWrapper">
            <input {...getInputProps()} type="file" />
            <Flex
              alignItems="center"
              justifyContent="center"
              direction="column">
              <span className="dropZoneUpperText">
                {disabled ? `You can't upload more photos` : 'Drag to upload'}
              </span>
              {!disabled && (
                <span className="dropZoneLowerText">
                  {`Max ${maxPhotos} photos`}
                </span>
              )}
              {loading && <div> Loading</div>}
            </Flex>
            <style jsx>
              {`
                .dropZoneWrapper {
                  display: flex;
                  width: 100%;
                  height: 138px;
                  background-color: ${color('light', 300)};
                  border-radius: 4px;
                  justify-content: center;
                  align-items: center;
                  cursor: ${disabled ? 'not-allowed' : 'pointer'};
                  user-select: none;
                  outline: none;
                }
                .dropZoneUpperText {
                  font-weight: 800;
                  color: ${color('dark', 100)};
                  text-align: 'center';
                }
                .dropZoneLowerText {
                  color: ${color('dark', 100)};
                  padding-top: 5px;
                }
              `}
            </style>
          </div>
        )}
      </Dropzone>
    )
  }
}