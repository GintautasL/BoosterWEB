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
  boosterProgramId: number
  closeModal: Function
  boosterProgramRequest: Function
}

type AllProps = PropsFromState & PropsFromDispatch

const initialValues = {
  comment: '',
  rating: 0,
}

const CreateRatingFormContainerComponent: React.FunctionComponent<AllProps> = ({
  createRatingRequest,
  createRating,
  boosterProgramId,
  closeModal,
  boosterProgramRequest,
}) => {
  const onSubmit = async values => {
    const createBoosterProgramData = {
      comment: values.comment,
      rating: values.rating,
      boosterProgram_id: boosterProgramId,
    }
    createRatingRequest(createBoosterProgramData, closeModal, boosterProgramRequest)
  }
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <CreateRatingFormComponent />
    </Formik>
  )
}

const mapStateToProps = ({ rating }: ApplicationState) => ({
  createRating: rating.createRating,
})

const mapDispatchToProps = dispatch => ({
  createRatingRequest: (data, closeModal, updateBoosterProgram) =>
    dispatch(createRatingRequest(data, closeModal, updateBoosterProgram)),
})

export const CreateRatingForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateRatingFormContainerComponent)
