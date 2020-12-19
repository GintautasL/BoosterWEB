import React from 'react'
import { union, get } from 'lodash'
import { DropZone, ThumbnailGallery } from '../..'
import config from '../../../config'
import { UploadState } from '../../../store/uploads/types'
import { uploadFileRequest } from '../../../store/uploads/actions'

interface Props {
  form: any
  initialUploadList: Array<any>
  initialThumbnail: Number
  readOnly: boolean
  upload: UploadState
  uploadFileRequest: typeof uploadFileRequest
}

interface StateProps {
  uploadList: Array<any>
  thumbnail: any
}

export class DropZoneWithGalleryComponent extends React.Component<
  Props,
  StateProps
> {
  constructor(props) {
    super(props)
    this.state = {
      uploadList: props.initialUploadList || [],
      thumbnail: props.initialThumbnail || undefined,
    }
  }

  removePhotos = id => {
    const {
      form: { setFieldValue },
    } = this.props
    const { uploadList, thumbnail } = this.state
    const uploadListAfterRemovedPhoto = uploadList.filter(
      imageId => imageId !== id,
    )
    const isItThumbnail = thumbnail === id
    this.setState(
      {
        uploadList: uploadListAfterRemovedPhoto,
        thumbnail: isItThumbnail
          ? get(uploadListAfterRemovedPhoto, '[0]')
          : thumbnail,
      },
      () => {
        setFieldValue('uploads', uploadListAfterRemovedPhoto.map(file => file))
        isItThumbnail &&
          setFieldValue('thumbnail', get(uploadListAfterRemovedPhoto, '[0]'))
      },
    )
  }

  setThumbnail = id => {
    const {
      form: { setFieldValue },
    } = this.props
    this.setState({ thumbnail: id }, () => {
      setFieldValue('thumbnail', id)
    })
  }

  setUploadList = data => {
    const {
      form: { setFieldValue },
    } = this.props
    const { uploadList } = this.state
    const newList = [...uploadList, ...data]
    this.setState(
      {
        uploadList: newList,
      },
      () => {
        setFieldValue('uploads', newList)
      },
    )
  }

  onUpload = photos => {
    const { uploadFileRequest } = this.props
    const { uploadList, thumbnail } = this.state
    const untilLimit = config.maxUploadImages - uploadList.length
    const limitedPhotos = photos.slice(0, untilLimit)
    try {
      uploadFileRequest(
        limitedPhotos,
        this.setUploadList,
        this.setThumbnail,
        thumbnail,
      )
    } finally {
    }
  }

  render() {
    const { uploadList, thumbnail } = this.state
    const { readOnly } = this.props
    return (
      <React.Fragment>
        <DropZone
          {...this.props}
          loading={false}
          disabled={readOnly || uploadList.length >= config.maxUploadImages}
          maxPhotos={config.maxUploadImages}
          onUpload={this.onUpload}
        />
        <ThumbnailGallery
          uploadList={uploadList}
          thumbnail={thumbnail}
          onSelect={this.setThumbnail}
          onRemove={this.removePhotos}
          readOnly={readOnly}
        />
      </React.Fragment>
    )
  }
}
