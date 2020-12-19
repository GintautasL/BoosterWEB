import { RatingActionTypes } from './types'
import { FieldError } from '../general/types'

export const createRatingRequest = (data, closeModal, updateGraffiti) => ({
  type: RatingActionTypes.CREATE_RATING_REQUEST,
  data,
  closeModal: closeModal,
  updateGraffiti: updateGraffiti
})
export const createRatingSuccess = () => ({
  type: RatingActionTypes.CREATE_RATING_SUCCESS,
})
export const createRatingFailure = (errors: FieldError[]) => ({
  type: RatingActionTypes.CREATE_RATING_FAILURE,
  errors,
})
