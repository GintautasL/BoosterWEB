import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { EditGraffitiPageComponent } from '.'
import { ApplicationState } from '../../../store'
import { graffitiRequest } from '../../../store/graffities/actions'
import { AdminUser } from '../../../store/users/types'
import { Graffiti } from '../../../store/graffities/types'

interface PropsFromDispatch {
  graffitiRequest: typeof graffitiRequest
}

interface PropsFromState {
  graffiti: Graffiti
}

type AllProps = PropsFromDispatch & PropsFromState

const EditGraffitiPageContainerComponent: React.FunctionComponent<AllProps> = ({
  graffitiRequest,
  graffiti,
}) => {
  const router = useRouter()

  useEffect(() => {
    graffitiRequest(router.query.id)
  }, [])
  return (
    <EditGraffitiPageComponent
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

export const EditGraffitiPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGraffitiPageContainerComponent)
