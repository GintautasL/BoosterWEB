import { FieldError } from '../general/types'

export enum GraffitiActionTypes {
  MY_GRAFFITIES_REQUEST = '@@graffities/MY_GRAFFITIES_REQUEST',
  MY_GRAFFITIES_SUCCESS = '@@graffities/MY_GRAFFITIES_SUCCESS',
  MY_GRAFFITIES_FAILURE = '@@graffities/MY_GRAFFITIES_FAILURE',
  CREATE_GRAFFITI_REQUEST = '@@graffities/CREATE_GRAFFITI_REQUEST',
  CREATE_GRAFFITI_SUCCESS = '@@graffities/CREATE_GRAFFITI_SUCCESS',
  CREATE_GRAFFITI_FAILURE = '@@graffities/CREATE_GRAFFITI_FAILURE',
  GRAFFITIES_REQUEST = '@@graffities/GRAFFITIES_REQUEST',
  GRAFFITIES_SUCCESS = '@@graffities/GRAFFITIES_SUCCESS',
  GRAFFITIES_FAILURE = '@@graffities/GRAFFITIES_FAILURE',
  GRAFFITI_REQUEST = '@@graffities/GRAFFITI_REQUEST',
  GRAFFITI_SUCCESS = '@@graffities/GRAFFITI_SUCCESS',
  GRAFFITI_FAILURE = '@@graffities/GRAFFITI_FAILURE',
  ADMIN_GRAFFITIES_REQUEST = '@@graffities/ADMIN_GRAFFITIES_REQUEST',
  ADMIN_GRAFFITIES_SUCCESS = '@@graffities/ADMIN_GRAFFITIES_SUCCESS',
  ADMIN_GRAFFITIES_FAILURE = '@@graffities/ADMIN_GRAFFITIES_FAILURE',
  EDIT_GRAFFITI_REQUEST = '@@graffities/EDIT_GRAFFITI_REQUEST',
  EDIT_GRAFFITI_SUCCESS = '@@graffities/EDIT_GRAFFITI_SUCCESS',
  EDIT_GRAFFITI_FAILURE = '@@graffities/EDIT_GRAFFITI_FAILURE',
}

export interface GraffitiesState {
  publicGraffities: Graffiti[]
  myGraffities: Graffiti[]
  createGraffiti: CreateGraffitiState
  editGraffiti: EditGraffitiState
  graffiti: GraffitiWithPhotos
  adminGraffities: Graffiti[]
}

export interface Graffiti {
  id: number
  name: string
  lat: number
  lng: number
  created_at: Date
  description: string
}

export interface GraffitiWithPhotos {
  id: number
  name: string
  lat: number
  lng: number
  totalRating: number
  totalRated: number
  description: string
  created_at: Date
  photos: Photo[]
  latestRatings: Rating[]
}

export interface Photo {
  id: number
}

export interface Rating {
  id: number
  rating: number
  comment: string
}

export interface CreateGraffitiState {
  readonly loading: boolean
  readonly errors?: FieldError[]
}

export interface EditGraffitiState {
  readonly loading: boolean
  readonly errors?: FieldError[]
}

export interface CreateGraffitiData {
  name: string
  lat: number
  lng: number
}

export interface EditGraffitiData {
  name: string
  description: string
  lat: number
  lng: number
}
