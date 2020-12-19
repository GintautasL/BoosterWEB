import { GraffitiActionTypes, GraffitiesState } from './types'

export const initialState: GraffitiesState = {
  myGraffities: [],
  publicGraffities: [],
  createGraffiti: {
    loading: false,
    errors: undefined,
  },
  graffiti: null,
  adminGraffities: [],
  editGraffiti: {
    loading: false,
    errors: undefined,
  },
}

export const graffitiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GraffitiActionTypes.GRAFFITIES_SUCCESS:
      return {
        ...state,
        publicGraffities: action.data,
      }
    case GraffitiActionTypes.ADMIN_GRAFFITIES_SUCCESS:
      return {
        ...state,
        adminGraffities: action.data,
      }
    case GraffitiActionTypes.MY_GRAFFITIES_SUCCESS:
      return {
        ...state,
        myGraffities: action.data,
      }
    case GraffitiActionTypes.GRAFFITI_SUCCESS:
      return {
        ...state,
        graffiti: action.data,
      }
    case GraffitiActionTypes.CREATE_GRAFFITI_REQUEST:
      return { ...state, createGraffiti: { loading: true, errors: undefined } }
    case GraffitiActionTypes.CREATE_GRAFFITI_SUCCESS:
      return { ...state, createGraffiti: { loading: false } }
    case GraffitiActionTypes.CREATE_GRAFFITI_FAILURE:
      return {
        ...state,
        createGraffiti: { loading: false, errors: action.errors },
      }

    case GraffitiActionTypes.EDIT_GRAFFITI_REQUEST:
      return { ...state, editGraffiti: { loading: true, errors: undefined } }
    case GraffitiActionTypes.EDIT_GRAFFITI_SUCCESS:
      return { ...state, editGraffiti: { loading: false } }
    case GraffitiActionTypes.EDIT_GRAFFITI_FAILURE:
      return {
        ...state,
        editGraffiti: { loading: false, errors: action.errors },
      }
    default:
      return state
  }
}
