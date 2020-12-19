import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { loginRequest } from '../../../store/auth/actions'
import { AuthPayload } from '../../../store/auth/types'
import { FieldError } from '../../../store/general/types'
import { ApplicationState } from '../../../store'
import { EditGraffitiFormComponent } from './component'
import { editBoosterProgramRequest } from '../../../store/boosterPrograms/actions'
import { BoosterProgram, FullBoosterProgram } from '../../../store/boosterPrograms/types'

interface PropsFromDispatch {
  editBoosterProgramRequest: typeof editBoosterProgramRequest
}

interface PropsFromState {
  loading: Boolean
  errors?: FieldError[]
  boosterProgram: FullBoosterProgram
}

type AllProps = PropsFromState & PropsFromDispatch

const initialValues = (boosterProgram: FullBoosterProgram) => ({
  description: boosterProgram.description,
  target_elo: boosterProgram.target_elo,
  starting_elo: boosterProgram.starting_elo,
  price: boosterProgram.price,
})

const EditGraffitiFormContainerComponent: React.FunctionComponent<AllProps> = ({
  editBoosterProgramRequest,
  loading,
  boosterProgram,
  errors,
}) => {
  const router = useRouter()
  const onSubmit = async values => {
    const boosterProgramEditData = {
      starting_elo: values.starting_elo,
      target_elo: values.target_elo,
      price: values.price,
      description: values.description,
    }
    editBoosterProgramRequest(boosterProgramEditData, router.query.id)
  }

  return boosterProgram ? (
    <Formik onSubmit={onSubmit} initialValues={initialValues(boosterProgram)}>
      <EditGraffitiFormComponent errors={errors} />
    </Formik>
  ) : (
    <div />
  )
}

const mapStateToProps = ({ users }: ApplicationState) => ({
  loading: users.editUser.loading,
  errors: users.editUser.errors,
})

const mapDispatchToProps = dispatch => ({
  editBoosterProgramRequest: (boosterProgramEditData, id) =>
    dispatch(editBoosterProgramRequest(boosterProgramEditData, id)),
})

export const EditBoosterProgramForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGraffitiFormContainerComponent)
