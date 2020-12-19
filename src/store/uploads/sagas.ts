import { put, call, takeEvery, take } from 'redux-saga/effects'
import * as actions from './actions'
import { api } from '../../utils/api'
import config from '../../config'
import { UploadActionTypes } from './types'

export function* uploadRequest(
  uploadData,
  setUploadList,
  setThumbnail,
  thumbnail,
) {
  try {
    const formData = new FormData()
    uploadData.forEach(file => {
      formData.append('files[]', file)
    })
    const payload = yield call(
      api,
      config.apiMethods.POST,
      'photo',
      formData,
      true,
    )
    setUploadList(payload.map(upload => upload.id))
    const thumbnailId = payload[0].id
    setThumbnail(thumbnail || thumbnailId)
    yield put(actions.uploadFileRequestSuccess(payload))
  } catch (e) {
    const errors = yield e
    yield put(actions.uploadFileRequestFailure(errors))
  }
}

export function* watchUploadRequest(props) {
  const { data, setUploadList, setThumbnail, thumbnail } = props
  yield call(uploadRequest, data, setUploadList, setThumbnail, thumbnail)
}

export default function*() {
  yield takeEvery(UploadActionTypes.UPLOAD_REQUEST, watchUploadRequest)
}
