import { UploadActionTypes, UploadState } from './types'

export const initialState: UploadState = {
  upload: null,
  loading: false,
  errors: undefined,
}

export const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UploadActionTypes.UPLOAD_REQUEST:
      return { ...state, loading: true, errors: undefined }
    case UploadActionTypes.UPLOAD_REQUEST_FAILURE:
      return { ...state, loading: false, errors: action.errors }
    case UploadActionTypes.UPLOAD_REQUEST_SUCCESS:
      return {
        ...state,
        upload: action.data.id,
        loading: false,
      }
    default:
      return state
  }
}
