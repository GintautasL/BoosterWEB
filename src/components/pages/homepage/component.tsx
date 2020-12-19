import React from 'react'
import { pages } from '..'
import { GoogleMaps } from '../../molecules'
import { color } from '../../../theme'
import { BoosterProgram } from '../../../store/boosterPrograms/types'

interface HomepageProps {
  graffities: BoosterProgram[]
}

const googleMapsContainerStyles = {
  height: '600px',
}

export const HomepageComponent: React.FunctionComponent<HomepageProps> = ({
  graffities,
}) => (
  <div>
    <h1>Eplore nearby graffities</h1>
    <GoogleMaps
      publicMode
      containerStyles={googleMapsContainerStyles}
      markers={graffities}
    />
    <style jsx>
      {`
        div {
          width: 100%;
        }
        h1 {
          margin-top: 0px;
          color: ${color('light', 200)};
        }
      `}
    </style>
  </div>
)
