import { combineReducers } from 'redux'
import { userReducer } from './users/reducers'
import { authReducer } from './auth/reducers'
import { boosterProgramReducer } from './boosterPrograms/reducers'
import { uploadReducer } from './uploads/reducers'
import { ratingReducer } from './ratings/reducers'
import { all, fork } from 'redux-saga/effects'

import authSaga from './auth/sagas'
import userSaga from './users/sagas'
import boosterProgramSaga from './boosterPrograms/sagas'
import uploadSaga from './uploads/sagas'
import ratingSaga from './ratings/sagas'

import { LoginState } from './auth/types'
import { UsersState } from './users/types'
import { BoosterProgramsState } from './boosterPrograms/types'
import { UploadState } from './uploads/types'
import { RatingsState } from './ratings/types'

export interface ApplicationState {
  login: LoginState
  users: UsersState
  boosterProgram: BoosterProgramsState
  upload: UploadState
  rating: RatingsState
}

export const rootReducer = combineReducers({
  users: userReducer,
  login: authReducer,
  boosterProgram: boosterProgramReducer,
  upload: uploadReducer,
  rating: ratingReducer,
})

const sagas = [userSaga, authSaga, boosterProgramSaga, uploadSaga, ratingSaga]

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)))
}
