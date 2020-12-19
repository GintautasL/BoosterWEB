import {
  UserActionTypes,
  ProfileData,
  RegisterData,
  AdminUser,
  UserEditData,
} from './types'
import { FieldError } from '../general/types'

export const profileRequest = () => ({
  type: UserActionTypes.PROFILE_REQUEST,
})
export const profileRequestSuccess = (data: ProfileData) => ({
  type: UserActionTypes.PROFILE_SUCCESS,
  profile: data,
})
export const profileRequestFailure = (errors: FieldError[]) => ({
  type: UserActionTypes.PROFILE_FAILURE,
  errors,
})

export const logoutRequest = () => ({
  type: UserActionTypes.LOGOUT_REQUEST,
})
export const logoutRequestSuccess = () => ({
  type: UserActionTypes.LOGOUT_SUCCESS,
})
export const logoutRequestFailure = (errors: FieldError[]) => ({
  type: UserActionTypes.LOGOUT_FAILURE,
  errors,
})

export const registerRequest = (data: RegisterData) => ({
  type: UserActionTypes.REGISTER_REQUEST,
  data: data,
})
export const registerRequestSuccess = () => ({
  type: UserActionTypes.REGISTER_SUCCESS,
})
export const registerRequestFailure = (errors: FieldError[]) => ({
  type: UserActionTypes.REGISTER_FAILURE,
  errors,
})

export const adminUsersRequest = (setState: Function) => ({
  type: UserActionTypes.ADMIN_USERS_REQUEST,
  setState: setState,
})
export const adminUsersRequestSuccess = (data: AdminUser[]) => ({
  type: UserActionTypes.ADMIN_USERS_SUCCESS,
  data: data,
})
export const adminUsersRequestFailure = (errors: FieldError[]) => ({
  type: UserActionTypes.ADMIN_USERS_FAILURE,
  errors,
})

export const adminUserRequest = id => ({
    type: UserActionTypes.ADMIN_USER_REQUEST,
    id: id,
})
export const adminUserRequestSuccess = (data: AdminUser) => ({
  type: UserActionTypes.ADMIN_USER_SUCCESS,
  data,
})
export const adminUserRequestFailure = (errors: FieldError[]) => ({
  type: UserActionTypes.ADMIN_USER_FAILURE,
  errors,
})

export const adminUserEditRequest = (user: UserEditData, id) => ({
  type: UserActionTypes.ADMIN_USER_EDIT_REQUEST,
  user: user,
  id: id,
})
export const adminUserEditRequestSuccess = () => ({
  type: UserActionTypes.ADMIN_USER_EDIT_SUCCESS,
})
export const adminUserEditRequestFailure = (errors: FieldError[]) => ({
  type: UserActionTypes.ADMIN_USER_EDIT_FAILURE,
  errors,
})
