import { FieldError } from '../general/types'

export enum RatingActionTypes {
  CREATE_RATING_REQUEST = '@@ratings/CREATE_RATING_REQUEST',
  CREATE_RATING_SUCCESS = '@@ratings/CREATE_RATING_SUCCESS',
  CREATE_RATING_FAILURE = '@@ratings/CREATE_RATING_FAILURE',
}

export interface RatingsState {
  createRating: CreateRatingState
}

export interface Rating {
  id: number
  rating: number
  comment: string
}

export interface CreateRatingState {
  readonly loading: boolean
  readonly errors?: FieldError[]
}

export interface CreateRatingData {
  rating: number
  comment: string
  boosterProgram_id: number
}
