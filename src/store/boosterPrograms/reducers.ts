import { BoosterProgramActionTypes, BoosterProgramsState } from './types'

export const initialState: BoosterProgramsState = {
  myBoosterPrograms: [],
  publicBoosterPrograms: [],
  boosterProgram: null,
  adminBoosterPrograms: [],
}

export const boosterProgramReducer = (state = initialState, action) => {
  switch (action.type) {
    case BoosterProgramActionTypes.BOOSTER_PROGRAMS_SUCCESS:
      return {
        ...state,
        publicBoosterPrograms: action.data,
      }
    case BoosterProgramActionTypes.ADMIN_BOOSTER_PROGRAMS_SUCCESS:
      return {
        ...state,
        adminBoosterPrograms: action.data,
      }
    case BoosterProgramActionTypes.MY_BOOSTER_PROGRAMS_SUCCESS:
      return {
        ...state,
        myBoosterPrograms: action.data,
      }
    case BoosterProgramActionTypes.BOOSTER_PROGRAM_SUCCESS:
      return {
        ...state,
        boosterProgram: action.data,
      }
    case BoosterProgramActionTypes.CREATE_BOOSTER_PROGRAM_REQUEST:
      return { ...state, createBoosterPrograms: { loading: true, errors: undefined } }
    case BoosterProgramActionTypes.CREATE_BOOSTER_PROGRAM_SUCCESS:
      return { ...state, createBoosterPrograms: { loading: false } }
    case BoosterProgramActionTypes.CREATE_BOOSTER_PROGRAM_FAILURE:
      return {
        ...state,
        createBoosterPrograms: { loading: false, errors: action.errors },
      }

    case BoosterProgramActionTypes.EDIT_BOOSTER_PROGRAM_REQUEST:
      return { ...state, editBoosterPrograms: { loading: true, errors: undefined } }
    case BoosterProgramActionTypes.EDIT_BOOSTER_PROGRAM_SUCCESS:
      return { ...state, editBoosterPrograms: { loading: false } }
    case BoosterProgramActionTypes.EDIT_BOOSTER_PROGRAM_FAILURE:
      return {
        ...state,
        editBoosterPrograms: { loading: false, errors: action.errors },
      }

      case BoosterProgramActionTypes.DELETE_BOOSTER_PROGRAM_SUCCESS:
        return { ...state, adminBoosterPrograms: state.adminBoosterPrograms.filter(program => program.id != action.id)}
    default:
      return state
  }
}
