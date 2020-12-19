import { FieldError } from '../general/types'

export enum AuthActionTypes {
  LOGIN_REQUEST = '@@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@@auth/LOGIN_FAILURE',
}

export interface LoginData {
  username: string
  password: string
}

export interface AuthPayload {
  token?: string
  refreshToken?: string
  type?: string
}

export interface LoginState {
  readonly loading: boolean
  readonly data: AuthPayload
  readonly errors?: FieldError[]
}
