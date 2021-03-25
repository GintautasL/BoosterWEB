import React from 'react'  //edited
import { color } from '../../../theme'
import { EditBoosterProgramForm } from '../../organisms/EditBoosterProgramForm'
import { FullBoosterProgram } from '../../../store/boosterPrograms/types'

interface Props {
  boosterProgram: FullBoosterProgram
}

export const EditBoosterProgramPageComponent: React.FunctionComponent<Props> = ({
  boosterProgram,
}) => {
  return (
    <div className="pageWrapper">
      <h1>Edit booster program</h1>
      <EditBoosterProgramForm boosterProgram={boosterProgram} />
      <style jsx>
        {`
          .ratingsWrapper {
            margin-top: 15px;
          }
          .ratingsUpperContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .starRatingWrapper {
            position: absolute;
            top: 5px;
            right: 15px;
            display: flex;
            align-items: center;
            font-size: 24px;
          }
          .starRatingWrapper div {
            font-size: 13px;
            margin-top: 4px;
            color: ${color('light', 300)};
          }
          label {
            font-size: 18px;
          }
          .sliderWrapper {
            width: 500px;
            height: max-content;
          }
          .rightContent {
            margin-left: 45px;
          }
          .pageWrapper {
            max-width: 540px;
            height: max-content;
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 30px;
            margin: auto 50px;
            width: 100%;
            background-image: linear-gradient(
              to bottom right,
              ${color('grey', 800)},
              ${color('light', 700)}
            );
            border-radius: 8px;
          }
          h1,
          h2,
          h4 {
            color: ${color('light', 300)};
            text-align: center;
          }
          .upperContent {
            display: flex;
            max-height: 700px;
          }
          .googleMapsWrapper {
            width: 100%;
            height: 400px;
            margin-top: 30px;
          }
        `}
      </style>
    </div>
  )
}
