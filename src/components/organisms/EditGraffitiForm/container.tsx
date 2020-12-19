import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { loginRequest } from '../../../store/auth/actions'
import { AuthPayload } from '../../../store/auth/types'
import { FieldError } from '../../../store/general/types'
import { ApplicationState } from '../../../store'
import { EditGraffitiFormComponent } from './component'
import { editGraffitiRequest } from '../../../store/graffities/actions'
import { Graffiti } from '../../../store/graffities/types'

interface PropsFromDispatch {
  editGraffitiRequest: typeof editGraffitiRequest
}

interface PropsFromState {
  loading: Boolean
  errors?: FieldError[]
  graffiti: Graffiti
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
  editGraffitiRequest,
  loading,
  graffiti,
  errors,
}) => {
  const router = useRouter()
  const onSubmit = async values => {
    const graffitiEditData = {
      name: values.name,
      description: values.description,
      lat: values.position.lat,
      lng: values.position.lng,
    }
    editGraffitiRequest(graffitiEditData, router.query.id)
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
  editGraffitiRequest: (graffitiEditData, id) =>
    dispatch(editGraffitiRequest(graffitiEditData, id)),
})

export const EditGraffitiForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGraffitiFormContainerComponent)
