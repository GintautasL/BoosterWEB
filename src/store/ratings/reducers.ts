import { RatingActionTypes, RatingsState } from './types'

export const initialState: RatingsState = {
  createRating: {
    loading: false,
    errors: undefined
  }
}

export const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RatingActionTypes.CREATE_RATING_REQUEST:
      return { ...state, createRating: { loading: true, errors: undefined } }
    case RatingActionTypes.CREATE_RATING_SUCCESS:
      return { ...state, createRating: { loading: false } }
    case RatingActionTypes.CREATE_RATING_FAILURE:
      return {
        ...state,
        createRating: { loading: false, errors: action.errors },
      }
    default:
      return state
  }
}
