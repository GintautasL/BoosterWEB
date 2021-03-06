import React from 'react'
import { Form } from 'formik'
import { FormField, Button, ErrorMessage } from '../..'
import { FieldError } from '../../../store/general/types'
import { getError } from '../../../utils'
import { color } from '../../../theme'

interface EditBoosterProgramFormProps {
  errors?: FieldError[]
}

export const EditBoosterProgramFormComponent: React.FunctionComponent<
  EditBoosterProgramFormProps
> = ({ errors }) => {
  return (
    <div className="boosterprogram-edit-form-wrapper">
      <Form className="boosterprogram-edit-form">
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
          .boosterprogram-edit-form-wrapper {
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
