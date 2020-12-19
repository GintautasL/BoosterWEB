export enum BoosterProgramActionTypes {
  MY_BOOSTER_PROGRAMS_REQUEST = '@@boosterPrograms/MY_BOOSTER_PROGRAMS_REQUEST',
  MY_BOOSTER_PROGRAMS_SUCCESS = '@@boosterPrograms/MY_BOOSTER_PROGRAMS_SUCCESS',
  MY_BOOSTER_PROGRAMS_FAILURE = '@@boosterPrograms/MY_BOOSTER_PROGRAMS_FAILURE',
  CREATE_BOOSTER_PROGRAM_REQUEST = '@@boosterPrograms/CREATE_BOOSTER_PROGRAM_REQUEST',
  CREATE_BOOSTER_PROGRAM_SUCCESS = '@@boosterPrograms/CREATE_BOOSTER_PROGRAM_SUCCESS',
  CREATE_BOOSTER_PROGRAM_FAILURE = '@@boosterPrograms/CREATE_BOOSTER_PROGRAM_FAILURE',
  BOOSTER_PROGRAMS_REQUEST = '@@boosterPrograms/BOOSTER_PROGRAMS_REQUEST',
  BOOSTER_PROGRAMS_SUCCESS = '@@boosterPrograms/BOOSTER_PROGRAMS_SUCCESS',
  BOOSTER_PROGRAMS_FAILURE = '@@boosterPrograms/BOOSTER_PROGRAMS_FAILURE',
  BOOSTER_PROGRAM_REQUEST = '@@boosterPrograms/BOOSTER_PROGRAM_REQUEST',
  BOOSTER_PROGRAM_SUCCESS = '@@boosterPrograms/BOOSTER_PROGRAM_SUCCESS',
  BOOSTER_PROGRAM_FAILURE = '@@boosterPrograms/BOOSTER_PROGRAM_FAILURE',
  ADMIN_BOOSTER_PROGRAMS_REQUEST = '@@boosterPrograms/ADMIN_BOOSTER_PROGRAMS_REQUEST',
  ADMIN_BOOSTER_PROGRAMS_SUCCESS = '@@boosterPrograms/ADMIN_BOOSTER_PROGRAMS_SUCCESS',
  ADMIN_BOOSTER_PROGRAMS_FAILURE = '@@boosterPrograms/ADMIN_BOOSTER_PROGRAMS_FAILURE',
  EDIT_BOOSTER_PROGRAM_REQUEST = '@@boosterPrograms/EDIT_BOOSTER_PROGRAM_REQUEST',
  EDIT_BOOSTER_PROGRAM_SUCCESS = '@@boosterPrograms/EDIT_BOOSTER_PROGRAM_SUCCESS',
  EDIT_BOOSTER_PROGRAM_FAILURE = '@@boosterPrograms/EDIT_BOOSTER_PROGRAM_FAILURE',
}

export interface BoosterProgramsState {
  publicBoosterPrograms: BoosterProgram[]
  myBoosterPrograms: BoosterProgram[]
  boosterProgram: FullBoosterProgram
  adminBoosterPrograms: BoosterProgram[]
}

export interface BoosterProgram {
  id: number
  starting_elo: string
  target_elo: string
  price: number
  created_at: Date
  updated_at: Date
}

export interface FullBoosterProgram {
  id: number
  starting_elo: string
  target_elo: string
  price: number
  created_at: Date
  updated_at: Date
  description: string
  totalRating: number
  totalRated: number
  latestRatings: Rating[]
}

export interface Rating {
  id: number
  rating: number
  comment: string
}

export interface CreateBoosterProgramData {
  starting_elo: string
  target_elo: string
  price: number
  description: string
}

export interface CreateRatingData {
  rating: number
  comment: string
}

export interface EditBoosterProgramFormData {
  starting_elo: string
  target_elo: string
  price: number
  description: string
}
