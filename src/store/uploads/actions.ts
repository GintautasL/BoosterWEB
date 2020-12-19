import { UploadActionTypes, Upload } from './types'
import { FieldError } from '../general/types'

export const uploadFileRequest = (
  file,
  setUploadList,
  setThumbnail,
  thumbnail,
) => ({
  type: UploadActionTypes.UPLOAD_REQUEST,
  data: file,
  setUploadList: setUploadList,
  setThumbnail: setThumbnail,
  thumbnail: thumbnail,
})

export const uploadFileRequestSuccess = (data: Upload) => ({
  type: UploadActionTypes.UPLOAD_REQUEST_SUCCESS,
  data,
})
export const uploadFileRequestFailure = (errors: FieldError[]) => ({
  type: UploadActionTypes.UPLOAD_REQUEST_FAILURE,
  errors,
})
