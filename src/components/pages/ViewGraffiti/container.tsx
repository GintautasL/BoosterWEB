import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { ViewBoosterProgramPageComponent } from '.'
import { ApplicationState } from '../../../store'
import { boosterProgramRequest } from '../../../store/boosterPrograms/actions'
import { createRatingRequest } from '../../../store/ratings/actions'
import { FullBoosterProgram } from '../../../store/boosterPrograms/types'

interface PropsFromDispatch {
  boosterProgramRequest: typeof boosterProgramRequest
}

interface PropsFromState {
  fullBoosterProgram: FullBoosterProgram
}

type AllProps = PropsFromDispatch & PropsFromState

const ViewGraffitiPageContainerComponent: React.FunctionComponent<AllProps> = ({
  boosterProgramRequest,
  fullBoosterProgram,
}) => {
  const router = useRouter()

  useEffect(() => {
    boosterProgramRequest(router.query.id)
  }, [])
  return (
    <ViewBoosterProgramPageComponent
      boosterProgram={fullBoosterProgram}
      graffitiRequest={() => boosterProgramRequest(router.query.id)}
    />
  )
}

const mapStateToProps = ({ boosterProgram }: ApplicationState) => ({
  graffiti: boosterProgram,
})

const mapDispatchToProps = dispatch => ({
  boosterProgramRequest: id => dispatch(boosterProgramRequest(id)),
})

export const ViewGraffitiPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewGraffitiPageContainerComponent)
