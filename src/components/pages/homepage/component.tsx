import React from 'react'
import { pages } from '..'
import { color } from '../../../theme'
import { BoosterProgram } from '../../../store/boosterPrograms/types'
import Router from 'next/router'

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
    <h1>Explore booster programs</h1>
    <div className="cards-container">
    {graffities.map((program) => (
      <div className="card" onClick={() => {
        Router.push(`${pages.boosterProgram.path}/${program.id}`)
      }}>
        <h2> Starting Elo</h2>
        <h4> {program.starting_elo} </h4>
        <h2> Target Elo </h2>
        <h4> {program.target_elo} </h4>
        <h2> Price </h2>
        <h4> {program.price} € </h4>
        </div>
    ))}
    </div>
    
    <style jsx>
      {`
        div {
          width: 100%;
        }
        h1 {
          margin-top: 0px;
          color: ${color('light', 200)};
        }
        h2 {
          text-align: center;
          margin-bottom: 5px;
        }
        h4 {
          text-align: center;
          margin-bottom: 40px;
          margin-top: 5px;
        }
        .card {
          width: 250px;
          background-image: radial-gradient(farthest-corner at 40px 40px, rgb(0, 0, 0), rgb(55, 14, 68));
          color: white;
          border-radius: 8px;
          min-height: 340px;
          margin: 0 10px 20px 10px;
          cursor: pointer;
          padding: 8px;
        }
        .card:hover {
          box-shadow: 5px 5px 10px white;
        }
        .cards-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}
    </style>
  </div>
)
