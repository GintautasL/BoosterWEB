import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { EditBoosterProgramPageComponent } from '.'
import { ApplicationState } from '../../../store'
import { boosterProgramRequest } from '../../../store/boosterPrograms/actions'
import { AdminUser } from '../../../store/users/types'
import { FullBoosterProgram } from '../../../store/boosterPrograms/types'

interface PropsFromDispatch {
  boosterProgramRequest: typeof boosterProgramRequest
}

interface PropsFromState {
  boosterProgram: FullBoosterProgram
}

type AllProps = PropsFromDispatch & PropsFromState

const EditBoosterProgramPageContainerComponent: React.FunctionComponent<AllProps> = ({
  boosterProgramRequest,
  boosterProgram,
}) => {
  const router = useRouter()

  useEffect(() => {
    boosterProgramRequest(router.query.id)
  }, [])
  return (
    <EditBoosterProgramPageComponent
    boosterProgram={boosterProgram}
    />
  )
}

const mapStateToProps = ({ boosterProgram }: ApplicationState) => ({
  boosterProgram: boosterProgram.boosterProgram,
})

const mapDispatchToProps = dispatch => ({
  boosterProgramRequest: id => dispatch(boosterProgramRequest(id)),
})

export const EditBoosterProgramPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditBoosterProgramPageContainerComponent)
