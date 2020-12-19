import { FieldError } from '../general/types'

export enum UploadActionTypes {
  UPLOAD_REQUEST = '@@uploads/UPLOAD_REQUEST',
  UPLOAD_REQUEST_SUCCESS = '@@uploads/UPLOAD_REQUEST_SUCCESS',
  UPLOAD_REQUEST_FAILURE = '@@uploads/UPLOAD_REQUEST_FAILURE',
}

export interface Upload {
  id: number
}

export interface UploadData {
  file: File
}

export interface UploadState {
  upload: Upload
  readonly loading: boolean
  readonly errors?: FieldError[]
}