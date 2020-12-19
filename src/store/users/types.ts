import { FieldError } from '../general/types'

export enum UserActionTypes {
  PROFILE_REQUEST = '@@users/PROFILE_REQUEST',
  PROFILE_SUCCESS = '@@users/PROFILE_SUCCESS',
  PROFILE_FAILURE = '@@users/PROFILE_FAILURE',
  LOGOUT_REQUEST = '@@users/LOGOUT_REQUEST',
  LOGOUT_SUCCESS = '@@users/LOGOUT_SUCCESS',
  LOGOUT_FAILURE = '@@users/LOGOUT_FAILURE',
  REGISTER_REQUEST = '@@users/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@@users/REGISTER_SUCCESS',
  REGISTER_FAILURE = '@@users/REGISTER_FAILURE',
  ADMIN_USERS_REQUEST = '@@users/ADMIN_USERS_REQUEST',
  ADMIN_USERS_SUCCESS = '@@users/ADMIN_USERS_SUCCESS',
  ADMIN_USERS_FAILURE = '@@users/ADMIN_USERS_FAILURE',
  ADMIN_USER_REQUEST = '@@users/ADMIN_USER_REQUEST',
  ADMIN_USER_SUCCESS = '@@users/ADMIN_USER_SUCCESS',
  ADMIN_USER_FAILURE = '@@users/ADMIN_USER_FAILURE',
  ADMIN_USER_EDIT_REQUEST = '@@users/ADMIN_USER_EDIT_REQUEST',
  ADMIN_USER_EDIT_SUCCESS = '@@users/ADMIN_USER_EDIT_SUCCESS',
  ADMIN_USER_EDIT_FAILURE = '@@users/ADMIN_USER_EDIT_FAILURE',
}
export interface ProfileData {
  username: string
  email: string
  roles: Role[]
}

export interface RegisterData {
  username: string
  email: string
  password: string
}

export interface UserEditData {
  username: string
}

export interface UserEditState {
  readonly loading: boolean
  readonly errors?: FieldError[]
}

export interface Role {
  title: string
}

export interface RegisterState {
  readonly loading: boolean
  readonly errors?: FieldError[]
}

export interface UsersState {
  register: RegisterState
  profile: ProfileData
  adminUsers: AdminUser[]
  adminUser: AdminUser
  editUser: UserEditState
}

export interface AdminUser {
  username: string
  email: string
  created_at: string
  roles: Role[]
}
