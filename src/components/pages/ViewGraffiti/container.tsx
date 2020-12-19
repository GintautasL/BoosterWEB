import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { ViewGraffitiPageComponent } from '.'
import { ApplicationState } from '../../../store'
import { graffitiRequest } from '../../../store/graffities/actions'
import { createRatingRequest } from '../../../store/ratings/actions'
import { GraffitiWithPhotos } from '../../../store/graffities/types'

interface PropsFromDispatch {
  graffitiRequest: typeof graffitiRequest
}

interface PropsFromState {
  graffiti: GraffitiWithPhotos
}

type AllProps = PropsFromDispatch & PropsFromState

const ViewGraffitiPageContainerComponent: React.FunctionComponent<AllProps> = ({
  graffitiRequest,
  graffiti,
}) => {
  const router = useRouter()

  useEffect(() => {
    graffitiRequest(router.query.id)
  }, [])
  return (
    <ViewGraffitiPageComponent
      graffiti={graffiti}
      graffitiRequest={() => graffitiRequest(router.query.id)}
    />
  )
}

const mapStateToProps = ({ graffiti }: ApplicationState) => ({
  graffiti: graffiti.graffiti,
})

const mapDispatchToProps = dispatch => ({
  graffitiRequest: id => dispatch(graffitiRequest(id)),
})

export const ViewGraffitiPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewGraffitiPageContainerComponent)
