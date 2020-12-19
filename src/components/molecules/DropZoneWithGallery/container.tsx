import React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../../../store'
import { DropZoneWithGalleryComponent } from '.'
import { uploadFileRequest } from '../../../store/uploads/actions'
import { UploadState } from '../../../store/uploads/types'

interface PropsFromDispatch {
  uploadFileRequest: typeof uploadFileRequest
}

interface PropsFromState {
  upload: UploadState
  initialUploadList: Array<any>
  initialThumbnail: Number
  form: any
  readOnly: boolean
}

type AllProps = PropsFromState & PropsFromDispatch

const DropZoneWithGalleryContainerComponent: React.FunctionComponent<
  AllProps
> = ({
  uploadFileRequest,
  upload,
  form,
  initialThumbnail,
  initialUploadList,
  readOnly,
}) => (
  <DropZoneWithGalleryComponent
    upload={upload}
    form={form}
    initialThumbnail={initialThumbnail}
    initialUploadList={initialUploadList}
    readOnly={readOnly}
    uploadFileRequest={uploadFileRequest}
  />
)

const mapStateToProps = ({ upload }: ApplicationState) => ({
  upload: {
    loading: upload.loading,
    upload: upload.upload,
    errors: upload.errors,
  },
})

const mapDispatchToProps = dispatch => ({
  uploadFileRequest: (uploadData, setUploadList, setThumbnail, thumbnail) =>
    dispatch(
      uploadFileRequest(uploadData, setUploadList, setThumbnail, thumbnail),
    ),
})

export const DropZoneWithGallery = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropZoneWithGalleryContainerComponent)
