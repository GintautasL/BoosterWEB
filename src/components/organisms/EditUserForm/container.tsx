import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { loginRequest } from '../../../store/auth/actions'
import { AuthPayload } from '../../../store/auth/types'
import { FieldError } from '../../../store/general/types'
import { ApplicationState } from '../../../store'
import { EditUserFormComponent } from './component'
import { AdminUser } from '../../../store/users/types'
import { adminUserEditRequest } from '../../../store/users/actions'

interface PropsFromDispatch {
  adminUserEditRequest: typeof adminUserEditRequest
}

interface PropsFromState {
  loading: Boolean
  errors?: FieldError[]
  user: AdminUser
}

type AllProps = PropsFromState & PropsFromDispatch

const initialValues = user => ({
  email: user.email,
  username: user.username,
})

const EditUserFormContainerComponent: React.FunctionComponent<AllProps> = ({
  adminUserEditRequest,
  loading,
  user,
  errors,
}) => {
  const router = useRouter()
  const onSubmit = async values => {
    const userEditData = {
      username: values.username,
    }
    adminUserEditRequest(userEditData, router.query.id)
  }
  return user ? (
    <Formik onSubmit={onSubmit} initialValues={initialValues(user)}>
      <EditUserFormComponent errors={errors} />
    </Formik>
  ) : (
    <div />
  )
}

const mapStateToProps = ({ users }: ApplicationState) => ({
  loading: users.editUser.loading,
  errors: users.editUser.errors,
})

const mapDispatchToProps = dispatch => ({
  adminUserEditRequest: (userEditData, id) =>
    dispatch(adminUserEditRequest(userEditData, id)),
})

export const EditUserForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserFormContainerComponent)
