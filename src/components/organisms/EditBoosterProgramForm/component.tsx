import React from 'react'
import { Form } from 'formik'
import { FormField, Button, ErrorMessage } from '../..'
import { FieldError } from '../../../store/general/types'
import { getError } from '../../../utils'
import { color } from '../../../theme'

interface EditGraffitiFormProps {
  errors?: FieldError[]
}

export const EditGraffitiFormComponent: React.FunctionComponent<
  EditGraffitiFormProps
> = ({ errors }) => {
  return (
    <div className="graffiti-edit-form-wrapper">
      <Form className="graffiti-edit-form">
        <FormField name="starting_elo" label="Starting Elo" />
        <FormField name="target_elo" label="Target Elo" />
        <FormField name="price" label="Price" type="number"/>
        <FormField name="description" label="Description" type="textfield"/>
        <div className="button-wrapper">
          <Button type="submit"> Edit </Button>
        </div>
        <div className="error-wrapper">
          <ErrorMessage>{getError(errors)}</ErrorMessage>
        </div>
      </Form>
      <style jsx>
        {`
          .graffiti-edit-form-wrapper {
            height: max-content;
            width: 100%;
            margin: auto;
            max-width: 500px;
          }
          .button-wrapper {
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }

          .error-wrapper {
            text-align: center;
            width: 100%;
            margin-top: 10px;
          }
          h1 {
            text-align: center;
            color: ${color('grey', 200)};
          }
        `}
      </style>
    </div>
  )
}
