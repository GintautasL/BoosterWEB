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
import {
  adminBoosterProgramsRequest,
  deleteBoosterProgramRequest,
} from '../../../store/boosterPrograms/actions'

interface PropsFromDispatch {}

interface PropsFromState {
  profile: ProfileData
}

type AllProps = PropsFromDispatch & PropsFromState

const AdminPanelPageContainerComponent: any = ({
  profile,
  isServer,
  adminUsers,
  adminBoosterPrograms,
  adminUsersRequest,
  adminBoosterProgramsRequest,
  deleteBoosterProgramRequest,
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
      adminBoosterProgramsRequest={adminBoosterProgramsRequest}
      adminBoosterPrograms={adminBoosterPrograms}
      deleteBoosterProgramRequest={deleteBoosterProgramRequest}
    />
  )
}

AdminPanelPageContainerComponent.getInitialProps = async ({ isServer }) => {
  return { isServer: isServer }
}

const mapStateToProps = ({ users, boosterProgram }: ApplicationState) => ({
  profile: users.profile,
  adminUsers: users.adminUsers,
  adminBoosterPrograms: boosterProgram.adminBoosterPrograms,
})

const mapDispatchToProps = dispatch => ({
  adminUsersRequest: setState => dispatch(adminUsersRequest(setState)),
  adminBoosterProgramsRequest: setState =>
    dispatch(adminBoosterProgramsRequest(setState)),
  deleteBoosterProgramRequest: id => dispatch(deleteBoosterProgramRequest(id)),
})
export const AdminPanelPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPanelPageContainerComponent)
