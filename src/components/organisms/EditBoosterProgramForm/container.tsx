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
import { BoosterProgram } from '../../../store/boosterPrograms/types'

interface PropsFromDispatch {
  editBoosterProgramRequest: typeof editBoosterProgramRequest
}

interface PropsFromState {
  loading: Boolean
  errors?: FieldError[]
  graffiti: BoosterProgram
}

type AllProps = PropsFromState & PropsFromDispatch

const initialValues = graffiti => ({
  name: graffiti.name,
  description: graffiti.description,
  position: {
    lat: graffiti.lat,
    lng: graffiti.lng,
  },
})

const EditGraffitiFormContainerComponent: React.FunctionComponent<AllProps> = ({
  editBoosterProgramRequest,
  loading,
  graffiti,
  errors,
}) => {
  const router = useRouter()
  const onSubmit = async values => {
    const graffitiEditData = {
      starting_elo: values.starting_elo,
      target_elo: values.target_elo,
      price: values.price,
      description: values.description,
    }
    editBoosterProgramRequest(graffitiEditData, router.query.id)
  }

  return graffiti ? (
    <Formik onSubmit={onSubmit} initialValues={initialValues(graffiti)}>
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
  editBoosterProgramRequest: (graffitiEditData, id) =>
    dispatch(editBoosterProgramRequest(graffitiEditData, id)),
})

export const EditGraffitiForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGraffitiFormContainerComponent)
