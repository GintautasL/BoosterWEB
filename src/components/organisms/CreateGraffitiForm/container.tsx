import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { CreateGraffitiFormComponent } from '.'
import { ApplicationState } from '../../../store'
import { createGraffitiRequest } from '../../../store/graffities/actions'
import { CreateGraffitiState } from '../../../store/graffities/types'

interface PropsFromDispatch {
  createGraffitiRequest: typeof createGraffitiRequest
}

interface PropsFromState {
  graffiti: CreateGraffitiState
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
> = ({ createGraffitiRequest, graffiti }) => {
  const onSubmit = async values => {
    const createGraffitiData = {
      name: values.name,
      description: values.description,
      lat: values.position.lat,
      lng: values.position.lng,
      uploads: values.uploads,
      thumbnail: values.thumbnail,
    }
    createGraffitiRequest(createGraffitiData)
  }
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <CreateGraffitiFormComponent graffiti={graffiti} />
    </Formik>
  )
}

const mapStateToProps = ({ graffiti }: ApplicationState) => ({
  graffiti: {
    loading: graffiti.createGraffiti.loading,
    errors: graffiti.createGraffiti.errors,
  },
})

const mapDispatchToProps = dispatch => ({
  createGraffitiRequest: createGraffitiData =>
    dispatch(createGraffitiRequest(createGraffitiData)),
})

export const CreateGraffitiForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGraffitiFormContainerComponent)
