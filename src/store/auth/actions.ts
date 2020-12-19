import { AuthActionTypes, LoginData, AuthPayload } from './types'
import { FieldError } from '../general/types'

export const loginRequest = (data: LoginData) => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  data: data,
})

export const loginRequestSuccess = (data: AuthPayload) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  data: data,
})

export const loginRequestFailure = (errors: FieldError[]) => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  errors,
})
