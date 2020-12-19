import React from 'react'
import { Form } from 'formik'
import { FormField, Button, ErrorMessage } from '../..'
import { FieldError } from '../../../store/general/types'
import { getError } from '../../../utils'
import { color } from '../../../theme'

interface RegisterFormProps {
  errors?: FieldError[]
}

export const RegisterForm: React.FunctionComponent<RegisterFormProps> = ({
  errors,
}) => {
  return (
    <div className="register-form-wrapper">
      <h1>Register</h1>
      <Form className="register-form">
        <FormField name="username" label="Username" />
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />
        <FormField name="repeat-password" label="Repeat password" />
        <FormField name="TAC" type="checkbox" label="I agree with the rules" />
        <div className="button-wrapper">
          <Button type="submit"> Register </Button>
        </div>
        <div className="error-wrapper">
          <ErrorMessage>{getError(errors)}</ErrorMessage>
        </div>
      </Form>
      <style jsx>
        {`
          .register-form-wrapper {
            max-width: 340px;
            width: 100%;
            border-radius: 8px;
            background-image: linear-gradient(
              to bottom right,
              ${color('grey', 600)},
              ${color('grey', 800)}
            );
            height: max-content;
            box-shadow: 20px 20px 40px black;
            padding: 40px;
            margin-bottom: auto;
            margin-top: auto;
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
