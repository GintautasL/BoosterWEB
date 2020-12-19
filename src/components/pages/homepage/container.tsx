import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { HomepageComponent } from '.'
import { graffitiesRequest } from '../../../store/graffities/actions'
import { Graffiti } from '../../../store/graffities/types'
import { ApplicationState } from '../../../store'

interface PropsFromDispatch {
  graffitiesRequest: typeof graffitiesRequest
}

interface PropsFromState {
  graffities: Graffiti[]
}

type AllProps = PropsFromDispatch & PropsFromState

const HomepagePageContainerComponent: React.FunctionComponent<AllProps> = ({
  graffitiesRequest,
  graffities,
}) => {
  useEffect(() => {
    graffitiesRequest()
  }, [])
  return <HomepageComponent graffities={graffities} />
}

const mapStateToProps = ({ graffiti }: ApplicationState) => ({
  graffities: graffiti.publicGraffities,
})


const mapDispatchToProps = {
  graffitiesRequest,
}


export const Homepage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomepagePageContainerComponent)
