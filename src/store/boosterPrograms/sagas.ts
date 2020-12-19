import Router from 'next/router'
import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import { api } from '../../utils/api'
import config from '../../config'
import { BoosterProgramActionTypes } from './types'
import { pages } from '../../components'

export function* myBoosterProgramsRequest() {  // logged users booster programs
  try {
    const payload = yield call(api, config.apiMethods.GET, 'user/boosterprograms')
    console.log(payload); //
  yield put(actions.myBoosterProgramsSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.myBoosterProgramsFailure(error))
  }
}

export function* BoosterProgramesRequest() {
  try {
    const payload = yield call(api, config.apiMethods.GET, 'boosterprogram')
    yield put(actions.boosterProgramsSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.boosterProgramsFailure(error))
  }
}

export function* adminBoosterProgramsRequest(setState) {
  try {
    const payload = yield call(api, config.apiMethods.GET, 'graffittis')
    setState(payload)
    yield put(actions.adminBoosterProgramsSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.adminBoosterProgramsFailure(error))
  }
}

export function* createBoosterProgramRequest(createBoosterProgramData) {
  try {
    yield call(api, config.apiMethods.POST, 'graffittis', createBoosterProgramData)
    Router.push(pages.myBoosterPrograms.path)
    yield put(actions.createBoosterProgramSuccess())
  } catch (e) {
    const errors = yield e
    yield put(actions.createBoosterProgramFailure(errors))
  }
}

export function* editBoosterProgramRequest(editBoosterProgramData, id) {
  try {
    yield call(api, config.apiMethods.PUT, `graffittis/${id}`, editBoosterProgramData)
    yield put(actions.editBoosterProgramSuccess())
  } catch (e) {
    const errors = yield e
    yield put(actions.editBoosterProgramFailure(errors))
  }
}

export function* BoosterProgramRequest(id) {
  try {
    const payload = yield call(api, config.apiMethods.GET, `graffittis/${id}`)
    yield put(actions.boosterProgramRequestSuccess(payload))
  } catch (e) {
    const errors = yield e
    yield put(actions.boosterProgramRequestFailure(errors))
  }
}

export function* watchMyBoosterProgramsRequest() {
  yield call(myBoosterProgramsRequest)
}

export function* watchAdminBoosterProgramsRequest(props) {
  const { setState } = props
  yield call(adminBoosterProgramsRequest, setState)
}

export function* watchBoosterProgramRequest(props) {
  const { id } = props
  yield call(BoosterProgramRequest, id)
}

export function* watchBoosterProgramsRequest() {
  yield call(BoosterProgramesRequest)
}

export function* watchCreateBoosterProgramRequest(props) {
  const { data } = props
  yield call(createBoosterProgramRequest, data)
}

export function* watchEditBoosterProgramRequest(props) {
  const { data, id } = props
  yield call(editBoosterProgramRequest, data, id)
}

export default function*() {
  yield takeEvery(BoosterProgramActionTypes.BOOSTER_PROGRAM_REQUEST, watchBoosterProgramRequest)
  yield takeEvery(
    BoosterProgramActionTypes.MY_BOOSTER_PROGRAMS_REQUEST,
    watchMyBoosterProgramsRequest,
  )
  yield takeEvery(
    BoosterProgramActionTypes.CREATE_BOOSTER_PROGRAM_REQUEST,
    watchCreateBoosterProgramRequest,
  )
  yield takeEvery(
    BoosterProgramActionTypes.BOOSTER_PROGRAMS_REQUEST,
    watchBoosterProgramsRequest,
  )
  yield takeEvery(
    BoosterProgramActionTypes.ADMIN_BOOSTER_PROGRAMS_REQUEST,
    watchAdminBoosterProgramsRequest,
  )
  yield takeEvery(
    BoosterProgramActionTypes.EDIT_BOOSTER_PROGRAM_REQUEST,
    watchEditBoosterProgramRequest,
  )
}
