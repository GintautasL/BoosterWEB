import { put, call, takeEvery } from 'redux-saga/effects'
import Router from 'next/router'
import * as actions from './actions'
import { api } from '../../utils/api'
import config from '../../config'
import { UserActionTypes } from './types'
import { clearStorageData } from '../../utils'
import { pages } from '../../components'

export function* profileRequest() {
  try {
    const payload = yield call(api, config.apiMethods.GET, 'user')
    yield put(actions.profileRequestSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.profileRequestFailure(error))
  }
}

export function* logoutRequest() {
  try {
    yield call(api, config.apiMethods.POST, 'logout')
    clearStorageData()
    Router.push(pages.login.path)
    yield put(actions.logoutRequestSuccess())
  } catch (e) {
    const error = yield e
    yield put(actions.logoutRequestFailure(error))
  }
}

export function* adminUserRequest(id) {
  try {
    const payload = yield call(api, config.apiMethods.GET, `users/${id}`)
    yield put(actions.adminUserRequestSuccess(payload))
  } catch (e) {
    const errors = yield e
    yield put(actions.adminUserRequestFailure(errors))
  }
}

export function* registerRequest(data) {
  try {
    yield call(api, config.apiMethods.POST, 'users', data)
    Router.push(pages.login.path)
    yield put(actions.registerRequestSuccess())
  } catch (e) {
    const errors = yield e
    yield put(actions.registerRequestFailure(errors))
  }
}

export function* adminUserEditRequest(data, id) {
  try {
    yield call(api, config.apiMethods.PUT, `users/${id}`, data)
    yield put(actions.adminUserEditRequestSuccess())
  } catch (e) {
    const errors = yield e
    yield put(actions.adminUserEditRequestFailure(errors))
  }
}

export function* watchAdminUserRequest(props) {
  const { id } = props
  yield call(adminUserRequest, id)
}

export function* watchAdminUserEditRequest(props) {
  const { user, id } = props
  yield call(adminUserEditRequest, user, id)
}

export function* watchLogoutRequest() {
  yield call(logoutRequest)
}

export function* adminUsersRequest(setState) {
  try {
    const payload = yield call(api, config.apiMethods.GET, 'users')
    setState(payload)
    yield put(actions.adminUsersRequestSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.adminUsersRequestFailure(error))
  }
}

export function* watchAdminUsersRequest(props) {
  const { setState } = props
  yield call(adminUsersRequest, setState)
}

export function* watchProfileRequest() {
  yield call(profileRequest)
}

export function* watchRegisterRequest(props) {
  const { data } = props
  yield call(registerRequest, data)
}

export default function*() {
  yield takeEvery(
    UserActionTypes.ADMIN_USER_EDIT_REQUEST,
    watchAdminUserEditRequest,
  )
  yield takeEvery(UserActionTypes.PROFILE_REQUEST, watchProfileRequest)
  yield takeEvery(UserActionTypes.LOGOUT_REQUEST, watchLogoutRequest)
  yield takeEvery(UserActionTypes.REGISTER_REQUEST, watchRegisterRequest)
  yield takeEvery(UserActionTypes.ADMIN_USERS_REQUEST, watchAdminUsersRequest)
  yield takeEvery(UserActionTypes.ADMIN_USER_REQUEST, watchAdminUserRequest)
}
