import React from 'react'
import { Form } from 'formik'
import { FormField, Button, ErrorMessage } from '../..'
import { FieldError } from '../../../store/general/types'
import { getError } from '../../../utils'
import { color } from '../../../theme'

interface EditUserFormProps {
  errors?: FieldError[]
}

export const EditUserFormComponent: React.FunctionComponent<EditUserFormProps> = ({
  errors,
}) => {
  return (
    <div className="user-edit-form-wrapper">
      <Form className="user-edit-form">
        <FormField name="email" label="Email" disabled/>
        <FormField name="username" label="Username" />
        <div className="button-wrapper">
          <Button type="submit"> Edit </Button>
        </div>
        <div className="error-wrapper">
          <ErrorMessage>{getError(errors)}</ErrorMessage>
        </div>
      </Form>
      <style jsx>
        {`
          .user-edit-form-wrapper {
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
