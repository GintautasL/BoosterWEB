import { GraffitiActionTypes, Graffiti, EditGraffitiData } from './types'
import { FieldError } from '../general/types'

export const myGraffitiesRequest = () => ({
  type: GraffitiActionTypes.MY_GRAFFITIES_REQUEST,
})
export const myGraffitiesSuccess = (data: Graffiti[]) => ({
  type: GraffitiActionTypes.MY_GRAFFITIES_SUCCESS,
  data,
})
export const myGraffitiesFailure = (errors: FieldError[]) => ({
  type: GraffitiActionTypes.MY_GRAFFITIES_FAILURE,
  errors,
})

export const createGraffitiRequest = data => ({
  type: GraffitiActionTypes.CREATE_GRAFFITI_REQUEST,
  data,
})
export const createGraffitiSuccess = () => ({
  type: GraffitiActionTypes.CREATE_GRAFFITI_SUCCESS,
})
export const createGraffitiFailure = (errors: FieldError[]) => ({
  type: GraffitiActionTypes.CREATE_GRAFFITI_FAILURE,
  errors,
})

export const graffitiesRequest = () => ({
  type: GraffitiActionTypes.GRAFFITIES_REQUEST,
})
export const graffitiesSuccess = (data: Graffiti[]) => ({
  type: GraffitiActionTypes.GRAFFITIES_SUCCESS,
  data,
})
export const graffitiesFailure = (errors: FieldError[]) => ({
  type: GraffitiActionTypes.GRAFFITIES_FAILURE,
  errors,
})

export const graffitiRequest = id => ({
  type: GraffitiActionTypes.GRAFFITI_REQUEST,
  id: id,
})
export const graffitiRequestSuccess = (data: Graffiti[]) => ({
  type: GraffitiActionTypes.GRAFFITI_SUCCESS,
  data,
})
export const graffitiRequestFailure = (errors: FieldError[]) => ({
  type: GraffitiActionTypes.GRAFFITI_FAILURE,
  errors,
})

export const adminGraffitiesRequest = (setState: Function) => ({
  type: GraffitiActionTypes.ADMIN_GRAFFITIES_REQUEST,
  setState: setState,
})
export const adminGraffitiesSuccess = (data: Graffiti[]) => ({
  type: GraffitiActionTypes.ADMIN_GRAFFITIES_SUCCESS,
  data,
})
export const adminGraffitiesFailure = (errors: FieldError[]) => ({
  type: GraffitiActionTypes.ADMIN_GRAFFITIES_FAILURE,
  errors,
})

export const editGraffitiRequest = (data: EditGraffitiData, id) => ({
  type: GraffitiActionTypes.EDIT_GRAFFITI_REQUEST,
  data: data,
  id: id,
})
export const editGraffitiSuccess = () => ({
  type: GraffitiActionTypes.EDIT_GRAFFITI_SUCCESS,
})
export const editGraffitiFailure = (errors: FieldError[]) => ({
  type: GraffitiActionTypes.EDIT_GRAFFITI_FAILURE,
  errors,
})
