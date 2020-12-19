import { BoosterProgramActionTypes, BoosterProgram, EditBoosterProgramFormData } from './types'
import { FieldError } from '../general/types'

export const myBoosterProgramsRequest = () => ({
  type: BoosterProgramActionTypes.MY_BOOSTER_PROGRAMS_REQUEST,
})
export const myBoosterProgramsSuccess = (data: BoosterProgram[]) => ({
  type: BoosterProgramActionTypes.MY_BOOSTER_PROGRAMS_SUCCESS,
  data,
})
export const myBoosterProgramsFailure = (errors: FieldError[]) => ({
  type: BoosterProgramActionTypes.MY_BOOSTER_PROGRAMS_FAILURE,
  errors,
})

export const createBoosterProgramRequest = data => ({
  type: BoosterProgramActionTypes.CREATE_BOOSTER_PROGRAM_REQUEST,
  data,
})
export const createBoosterProgramSuccess = () => ({
  type: BoosterProgramActionTypes.CREATE_BOOSTER_PROGRAM_SUCCESS,
})
export const createBoosterProgramFailure = (errors: FieldError[]) => ({
  type: BoosterProgramActionTypes.CREATE_BOOSTER_PROGRAM_FAILURE,
  errors,
})

export const boosterProgramsRequest = () => ({
  type: BoosterProgramActionTypes.BOOSTER_PROGRAMS_REQUEST,
})
export const boosterProgramsSuccess = (data: BoosterProgram[]) => ({
  type: BoosterProgramActionTypes.BOOSTER_PROGRAMS_SUCCESS,
  data,
})
export const boosterProgramsFailure = (errors: FieldError[]) => ({
  type: BoosterProgramActionTypes.BOOSTER_PROGRAMS_FAILURE,
  errors,
})

export const boosterProgramRequest = id => ({
  type: BoosterProgramActionTypes.BOOSTER_PROGRAM_REQUEST,
  id: id,
})
export const boosterProgramRequestSuccess = (data: BoosterProgram[]) => ({
  type: BoosterProgramActionTypes.BOOSTER_PROGRAM_SUCCESS,
  data,
})
export const boosterProgramRequestFailure = (errors: FieldError[]) => ({
  type: BoosterProgramActionTypes.BOOSTER_PROGRAM_FAILURE,
  errors,
})

export const adminBoosterProgramsRequest = (setState: Function) => ({
  type: BoosterProgramActionTypes.ADMIN_BOOSTER_PROGRAMS_REQUEST,
  setState: setState,
})
export const adminBoosterProgramsSuccess = (data: BoosterProgram[]) => ({
  type: BoosterProgramActionTypes.ADMIN_BOOSTER_PROGRAMS_SUCCESS,
  data,
})
export const adminBoosterProgramsFailure = (errors: FieldError[]) => ({
  type: BoosterProgramActionTypes.ADMIN_BOOSTER_PROGRAMS_FAILURE,
  errors,
})

export const editBoosterProgramRequest = (data: EditBoosterProgramFormData, id) => ({
  type: BoosterProgramActionTypes.EDIT_BOOSTER_PROGRAM_REQUEST,
  data: data,
  id: id,
})
export const editBoosterProgramSuccess = () => ({
  type: BoosterProgramActionTypes.EDIT_BOOSTER_PROGRAM_SUCCESS,
})
export const editBoosterProgramFailure = (errors: FieldError[]) => ({
  type: BoosterProgramActionTypes.EDIT_BOOSTER_PROGRAM_FAILURE,
  errors,
})

export const deleteBoosterProgramRequest = (id) => ({
  type: BoosterProgramActionTypes.DELETE_BOOSTER_PROGRAM_REQUEST,
  id: id,
})
export const deleteBoosterProgramSuccess = (id) => ({
  type: BoosterProgramActionTypes.DELETE_BOOSTER_PROGRAM_SUCCESS,
  id
})
export const deleteBoosterProgramFailure = (errors: FieldError[]) => ({
  type: BoosterProgramActionTypes.DELETE_BOOSTER_PROGRAM_FAILURE,
  errors,
})
