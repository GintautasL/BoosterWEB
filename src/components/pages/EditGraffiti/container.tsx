import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { EditGraffitiPageComponent } from '.'
import { ApplicationState } from '../../../store'
import { boosterProgramRequest } from '../../../store/boosterPrograms/actions'
import { AdminUser } from '../../../store/users/types'
import { BoosterProgram } from '../../../store/boosterPrograms/types'

interface PropsFromDispatch {
  boosterProgramRequest: typeof boosterProgramRequest
}

interface PropsFromState {
  graffiti: BoosterProgram
}

type AllProps = PropsFromDispatch & PropsFromState

const EditGraffitiPageContainerComponent: React.FunctionComponent<AllProps> = ({
  boosterProgramRequest,
  graffiti,
}) => {
  const router = useRouter()

  useEffect(() => {
    boosterProgramRequest(router.query.id)
  }, [])
  return (
    <EditGraffitiPageComponent
      graffiti={graffiti}
    />
  )
}

const mapStateToProps = ({ boosterProgram }: ApplicationState) => ({
  boosterProgram: boosterProgram.boosterProgram,
})

const mapDispatchToProps = dispatch => ({
  graffitiRequest: id => dispatch(boosterProgramRequest(id)),
})

export const EditGraffitiPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGraffitiPageContainerComponent)
