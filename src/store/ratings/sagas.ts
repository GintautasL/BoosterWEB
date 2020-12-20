import { put, call, takeEvery, take } from 'redux-saga/effects'
import * as actions from './actions'
import { api } from '../../utils/api'
import config from '../../config'
import { RatingActionTypes } from './types'

export function* createRatingRequest(
  createBoosterProgramData,
  closeModal,
  updateBoosterProgram,
) {
  try {
    yield call(api, config.apiMethods.POST, 'ratings', createBoosterProgramData)
    updateBoosterProgram()
    closeModal()
    yield put(actions.createRatingSuccess())
  } catch (e) {
    const errors = yield e
    yield put(actions.createRatingFailure(errors))
  }
}

export function* watchCreateRatingRequest(props) {
  const { data, closeModal, updateBoosterProgram } = props
  yield call(createRatingRequest, data, closeModal, updateBoosterProgram)
}

export default function*() {
  yield takeEvery(
    RatingActionTypes.CREATE_RATING_REQUEST,
    watchCreateRatingRequest,
  )
}
