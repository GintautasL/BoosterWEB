import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { MyBoosterProgramsPageComponent } from '.'
import { ApplicationState } from '../../../store'
import { myBoosterProgramsRequest } from '../../../store/boosterPrograms/actions'
import { BoosterProgram } from '../../../store/boosterPrograms/types'

interface PropsFromDispatch {
  myBoosterProgramsRequest: typeof myBoosterProgramsRequest
}

interface PropsFromState {
  boosterPrograms: BoosterProgram[]
}

type AllProps = PropsFromDispatch & PropsFromState

const MyGraffitiesPageContainerComponent: React.FunctionComponent<AllProps> = ({
  myBoosterProgramsRequest,
  boosterPrograms,
}) => {
  useEffect(() => {
    myBoosterProgramsRequest()
  }, [])
  return <MyBoosterProgramsPageComponent boosterPrograms={boosterPrograms} />
}

const mapStateToProps = ({ boosterProgram }: ApplicationState) => ({
  boosterPrograms: boosterProgram.myBoosterPrograms,
})

const mapDispatchToProps = {
  myBoosterProgramsRequest,
}

export const MyGraffitiesPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyGraffitiesPageContainerComponent)
