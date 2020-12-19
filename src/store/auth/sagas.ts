import { put, call, takeEvery, take } from 'redux-saga/effects'
import Router from 'next/router'
import * as actions from './actions'
import * as userActions from '../users/actions'
import { api } from '../../utils/api'
import config from '../../config'
import { AuthActionTypes } from './types'
import { setAuthTokens } from '../../utils/localStorage'
import { pages } from '../../components'

export function* loginRequest(data) {
  try {
    const payload = yield call(api, config.apiMethods.POST, 'login', data)
    yield put(actions.loginRequestSuccess(payload))
    setAuthTokens(payload)
    yield put(userActions.profileRequest())
    Router.push(pages.homepage.path)
  } catch (e) {
    const error = yield e
    yield put(actions.loginRequestFailure(error))
  }
}

export function* watchLoginRequest(props) {
  const { data } = props
  yield call(loginRequest, data)
}

export default function*() {
  yield takeEvery(AuthActionTypes.LOGIN_REQUEST, watchLoginRequest)
}
