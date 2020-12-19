import React from 'react'
import { Form } from 'formik'
import { FormField, Button, ErrorMessage } from '../..'
import { FieldError } from '../../../store/general/types'
import { getError } from '../../../utils'
import { color } from '../../../theme'

interface LoginFormProps {
  errors?: FieldError[]
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  errors,
}) => {
  return (
    <div className="login-form-wrapper">
      <h1>Login</h1>
      <Form className="login-form">
        <FormField name="email" label="Email" />
        <FormField name="password" type="password" label="Password" />
        <div className="button-wrapper">
          <Button type="submit"> Login </Button>
        </div>
        <div className="error-wrapper">
          <ErrorMessage>{getError(errors)}</ErrorMessage>
        </div>
      </Form>
      <style jsx>
        {`
          .login-form-wrapper {
            height: max-content;
            padding: 40px;
            max-width: 340px;
            width: 100%;
            border-radius: 8px;
            background-image: linear-gradient(
              to bottom right,
              ${color('grey', 600)},
              ${color('grey', 800)}
            );
            margin-bottom: auto;
            margin-top: auto;
            box-shadow: 20px 20px 40px black;
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
