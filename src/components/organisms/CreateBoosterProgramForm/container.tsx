import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { CreateBoosterProgramFormComponent } from '.'
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

const CreateBoosterProgramFormContainerComponent: React.FunctionComponent<
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
      <CreateBoosterProgramFormComponent />
    </Formik>
  )
}

const mapStateToProps = ({ boosterProgram }: ApplicationState) => ({
  boosterProgram: boosterProgram.boosterProgram
})

const mapDispatchToProps = dispatch => ({
  createBoosterProgramRequest: createBoosterProgramData =>
    dispatch(createBoosterProgramRequest(createBoosterProgramData)),
})

export const CreateBoosterProgramForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateBoosterProgramFormContainerComponent)
