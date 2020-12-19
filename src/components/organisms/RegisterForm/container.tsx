import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { RegisterForm } from '.'
import { FieldError } from '../../../store/general/types'
import { ApplicationState } from '../../../store'
import { registerRequest } from '../../../store/users/actions'

interface PropsFromDispatch {
  registerRequest: typeof registerRequest
}

interface PropsFromState {
  loading: Boolean
  errors?: FieldError[]
}

type AllProps = PropsFromState & PropsFromDispatch

const initialValues = {
  email: '',
  username: '',
  password: '',
}

const RegisterFormContainerComponent: React.FunctionComponent<AllProps> = ({
  registerRequest,
  loading,
  errors,
}) => {
  const onSubmit = async values => {
    const registerData = {
      username: values.username,
      email: values.email,
      password: values.password,
    }
    registerRequest(registerData)
  }
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <RegisterForm errors={errors} />
    </Formik>
  )
}

const mapStateToProps = ({ users }: ApplicationState) => ({
  loading: users.register.loading,
  errors: users.register.errors,
})

const mapDispatchToProps = dispatch => ({
  registerRequest: registerData => dispatch(registerRequest(registerData)),
})

export const RegisterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterFormContainerComponent)
