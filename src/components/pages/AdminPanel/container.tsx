import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { AdminPanelPageComponent } from '.'
import { ApplicationState } from '../../../store'
import { ProfileData } from '../../../store/users/types'
import config from '../../../config'
import { pages } from '../pagesConfig'
import { Homepage } from '../homepage'
import { adminUsersRequest } from '../../../store/users/actions'
import { adminGraffitiesRequest } from '../../../store/graffities/actions'

interface PropsFromDispatch {}

interface PropsFromState {
  profile: ProfileData
}

type AllProps = PropsFromDispatch & PropsFromState

const AdminPanelPageContainerComponent: any = ({
  profile,
  isServer,
  adminUsers,
  adminGraffities,
  adminUsersRequest,
  adminGraffitiesRequest,
}) => {
  if (isServer) return <Homepage />
  if (
    !(
      profile.roles &&
      profile.roles.find(role => role.title === config.roles.ROLE_ADMIN.role)
    )
  ) {
    Router.push(pages.homepage.path)
  }
  return (
    <AdminPanelPageComponent
      adminUsersRequest={adminUsersRequest}
      adminUsers={adminUsers}
      adminGraffitiesRequest={adminGraffitiesRequest}
      adminGraffities={adminGraffities}
    />
  )
}

AdminPanelPageContainerComponent.getInitialProps = async ({ isServer }) => {
  return { isServer: isServer }
}

const mapStateToProps = ({ users, graffiti }: ApplicationState) => ({
  profile: users.profile,
  adminUsers: users.adminUsers,
  adminGraffities: graffiti.adminGraffities,
})

const mapDispatchToProps = dispatch => ({
  adminUsersRequest: setState => dispatch(adminUsersRequest(setState)),
  adminGraffitiesRequest: setState =>
    dispatch(adminGraffitiesRequest(setState)),
})
export const AdminPanelPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPanelPageContainerComponent)
