import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { EditUserPageComponent } from '.'
import { ApplicationState } from '../../../store'
import { adminUserRequest } from '../../../store/users/actions'
import { AdminUser } from '../../../store/users/types'

interface PropsFromDispatch {
  adminUserRequest: typeof adminUserRequest
}

interface PropsFromState {
  adminUser: AdminUser
}

type AllProps = PropsFromDispatch & PropsFromState

const EditUserPageContainerComponent: React.FunctionComponent<AllProps> = ({
  adminUserRequest,
  adminUser,
}) => {
  const router = useRouter()

  useEffect(() => {
    adminUserRequest(router.query.id)
  }, [])
  return (
    <EditUserPageComponent
      user={adminUser}
      adminUserRequest={() => adminUserRequest(router.query.id)}
    />
  )
}

const mapStateToProps = ({ users }: ApplicationState) => ({
  adminUser: users.adminUser,
})

const mapDispatchToProps = dispatch => ({
  adminUserRequest: id => dispatch(adminUserRequest(id)),
})

export const EditUserPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserPageContainerComponent)
