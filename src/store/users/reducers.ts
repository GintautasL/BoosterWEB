import { UserActionTypes, UsersState } from './types'

export const initialState: UsersState = {
  profile: {
    username: '',
    email: '',
    roles: undefined,
  },
  register: {
    errors: undefined,
    loading: false,
  },
  adminUsers: [],
  adminUser: undefined,
  editUser: {
    errors: undefined,
    loading: false,
  },
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          username: action.profile.username,
          email: action.profile.email,
          roles: action.profile.roles,
        },
      }
    case UserActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        profile: initialState.profile,
      }
    case UserActionTypes.ADMIN_USER_SUCCESS:
      return {
        ...state,
        adminUser: action.data,
      }
    case UserActionTypes.REGISTER_REQUEST:
      return { ...state, register: { loading: true, errors: undefined } }
    case UserActionTypes.REGISTER_SUCCESS:
      return { ...state, register: { loading: false } }
    case UserActionTypes.REGISTER_FAILURE:
      return { ...state, register: { loading: false, errors: action.errors } }

    case UserActionTypes.ADMIN_USER_EDIT_REQUEST:
      return { ...state, editUser: { loading: true, errors: undefined } }
    case UserActionTypes.ADMIN_USER_EDIT_SUCCESS:
      return { ...state, editUser: { loading: false } }
    case UserActionTypes.ADMIN_USER_EDIT_FAILURE:
      return { ...state, editUser: { loading: false, errors: action.errors } }

    case UserActionTypes.ADMIN_USERS_SUCCESS:
      return {
        ...state,
        adminUsers: action.data,
      }
    default:
      return state
  }
}
