import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { CreateRatingFormComponent } from '.'
import { ApplicationState } from '../../../store'
import { createRatingRequest } from '../../../store/ratings/actions'
import { CreateRatingState } from '../../../store/ratings/types'

interface PropsFromDispatch {
  createRatingRequest: typeof createRatingRequest
}

interface PropsFromState {
  createRating: CreateRatingState
  graffitiId: number
  closeModal: Function
  graffitiRequest: Function
}

type AllProps = PropsFromState & PropsFromDispatch

const initialValues = {
  comment: '',
  rating: 0,
}

const CreateRatingFormContainerComponent: React.FunctionComponent<AllProps> = ({
  createRatingRequest,
  createRating,
  graffitiId,
  closeModal,
  graffitiRequest,
}) => {
  const onSubmit = async values => {
    const createGraffitiData = {
      comment: values.comment,
      rating: values.rating,
      graffiti_id: graffitiId,
    }
    createRatingRequest(createGraffitiData, closeModal, graffitiRequest)
  }
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <CreateRatingFormComponent createRating={createRating} />
    </Formik>
  )
}

const mapStateToProps = ({ rating }: ApplicationState) => ({
  createRating: rating.createRating,
})

const mapDispatchToProps = dispatch => ({
  createRatingRequest: (data, closeModal, updateGraffiti) =>
    dispatch(createRatingRequest(data, closeModal, updateGraffiti)),
})

export const CreateRatingForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateRatingFormContainerComponent)
