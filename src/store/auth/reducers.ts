import { AuthActionTypes, LoginState } from './types'

export const initialState: LoginState = {
  data: {},
  loading: false,
  errors: undefined,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true, errors: undefined }
    case AuthActionTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.data }
    case AuthActionTypes.LOGIN_FAILURE:
      return { ...state, loading: false, errors: action.errors }
    default:
      return state
  }
}
