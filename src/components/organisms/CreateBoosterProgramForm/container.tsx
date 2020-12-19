import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { CreateGraffitiFormComponent } from '.'
import { ApplicationState } from '../../../store'
import { createBoosterProgramRequest } from '../../../store/boosterPrograms/actions'
import { CreateBoosterProgramData } from '../../../store/boosterPrograms/types'

interface PropsFromDispatch {
  createBoosterProgramRequest: typeof createBoosterProgramRequest
}

interface PropsFromState {
  boosterProgram: CreateBoosterProgramData
}

type AllProps = PropsFromState & PropsFromDispatch

const initialValues = {
  name: '',
  description: '',
  position: null,
  uploads: [],
  thumbnail: null,
}

const CreateGraffitiFormContainerComponent: React.FunctionComponent<
  AllProps
> = ({ createBoosterProgramRequest }) => {
  const onSubmit = async values => {
    const createBoosterProgramData = {
      description: values.description,
      starting_elo: values.starting_elo,
      target_elo: values.target_elo,
      price: values.price,
    }
    createBoosterProgramRequest(createBoosterProgramData)
  }
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <CreateGraffitiFormComponent />
    </Formik>
  )
}

const mapStateToProps = ({ boosterProgram }: ApplicationState) => ({
  boosterProgram: boosterProgram.boosterProgram
})

const mapDispatchToProps = dispatch => ({
  createBoosterProgramRequest: createGraffitiData =>
    dispatch(createBoosterProgramRequest(createGraffitiData)),
})

export const CreateBoosterProgramForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGraffitiFormContainerComponent)
