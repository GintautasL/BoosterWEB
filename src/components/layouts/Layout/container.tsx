import React, { useEffect } from 'react'
import { LayoutComponent } from './component'
import { connect } from 'react-redux'
import { ApplicationState } from '../../../store'
import { profileRequest } from '../../../store/users/actions'
import { isUserActive } from '../../../utils/localStorage'

export const LayoutComponentContainer = ({
  children,
  profile,
  profileRequest,
}) => {
  useEffect(() => {
    if (isUserActive() && !profile.username) {
      profileRequest()
    }
  }, [])
  return <LayoutComponent>{children}</LayoutComponent>
}

const mapStateToProps = ({ users }: ApplicationState) => ({
  profile: users.profile,
})

const mapDispatchToProps = {
  profileRequest,
}

export const Layout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutComponentContainer)
