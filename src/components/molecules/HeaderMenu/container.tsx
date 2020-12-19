import React from 'react'
import { HeaderMenuComponent } from './component'
import { connect } from 'react-redux'
import { ApplicationState } from '../../../store'
import { logoutRequest } from '../../../store/users/actions'

export const HeaderMenuContainerComponent = ({ logoutRequest, profile }) => {
  return <HeaderMenuComponent logoutRequest={logoutRequest} profile={profile} />
}

const mapStateToProps = ({ users }: ApplicationState) => ({
  profile: users.profile,
})

const mapDispatchToProps = {
  logoutRequest,
}

export const HeaderMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderMenuContainerComponent)
