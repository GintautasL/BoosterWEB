import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { MyGraffitiesPageComponent } from '.'
import { ApplicationState } from '../../../store'
import { myGraffitiesRequest } from '../../../store/graffities/actions'
import { Graffiti } from '../../../store/graffities/types'

interface PropsFromDispatch {
  myGraffitiesRequest: typeof myGraffitiesRequest
}

interface PropsFromState {
  graffities: Graffiti[]
}

type AllProps = PropsFromDispatch & PropsFromState

const MyGraffitiesPageContainerComponent: React.FunctionComponent<AllProps> = ({
  myGraffitiesRequest,
  graffities,
}) => {
  useEffect(() => {
    myGraffitiesRequest()
  }, [])
  return <MyGraffitiesPageComponent graffities={graffities} />
}

const mapStateToProps = ({ graffiti }: ApplicationState) => ({
  graffities: graffiti.myGraffities,
})

const mapDispatchToProps = {
  myGraffitiesRequest,
}

export const MyGraffitiesPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyGraffitiesPageContainerComponent)
