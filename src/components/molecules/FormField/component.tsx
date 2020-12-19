import React from 'react'
import { Field, ErrorMessage as FormikErrorMessage } from 'formik'
import {
  Input,
  ErrorMessage,
  StarRatingField,
  GoogleMapsField,
  DropZoneWithGallery,
  CheckboxField,
} from '../..'

export const FormField = ({
  type = null,
  name = '',
  label = '',
  disabled = false,
  ...props
}) => {
  const chooseInput = () => {
    const inputType = {
      checkbox: CheckboxField,
      googleMaps: GoogleMapsField,
      dropzoneWithGallery: DropZoneWithGallery,
      starRating: StarRatingField,
    }
    return inputType[type] || Input
  }
  return (
    <div>
      <Field
        type={type}
        disabled={disabled}
        label={label}
        name={name}
        component={chooseInput()}
      />
      <div className="inputErrorMessageWrapper">
        <FormikErrorMessage
          name={name}
          {...props}
          render={msg => <ErrorMessage>{msg}</ErrorMessage>}
        />
      </div>
      <style jsx>
        {`
          .inputErrorMessageWrapper {
            min-height: 21px;
          }
        `}
      </style>
    </div>
  )
}
