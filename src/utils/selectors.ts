import { FieldError } from '../store/general/types'

export const getError = (errors: FieldError[]): string => {
  if (errors && errors.length > 0) {
    return errors[0].message
  }
  return ''
}
