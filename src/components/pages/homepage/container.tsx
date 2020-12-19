import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { HomepageComponent } from '.'
import { boosterProgramsRequest } from '../../../store/boosterPrograms/actions'
import { BoosterProgram } from '../../../store/boosterPrograms/types'
import { ApplicationState } from '../../../store'

interface PropsFromDispatch {
  boosterProgramsRequest: typeof boosterProgramsRequest
}

interface PropsFromState {
  boosterPrograms: BoosterProgram[]
}

type AllProps = PropsFromDispatch & PropsFromState

const HomepagePageContainerComponent: React.FunctionComponent<AllProps> = ({
  boosterProgramsRequest,
  boosterPrograms,
}) => {
  useEffect(() => {
    boosterProgramsRequest()
  }, [])
  return <HomepageComponent graffities={boosterPrograms} />
}

const mapStateToProps = ({ boosterProgram }: ApplicationState) => ({
  boosterPrograms: boosterProgram.publicBoosterPrograms,
})


const mapDispatchToProps = {
  boosterProgramsRequest,
}


export const Homepage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomepagePageContainerComponent)
