import React, { useState } from 'react'
import { FullBoosterProgram } from '../../../store/boosterPrograms/types'
import StarRating from 'react-star-rating-component'
import { color } from '../../../theme'
import { Button } from '../../atoms'
import { Table, Modal } from '../../molecules'
import { CreateRatingForm } from '../../organisms/RateBoosterProgramForm'

interface Props {
  boosterProgram: FullBoosterProgram
  boosterProgramRequest: Function
}

const rowStructure = rating => ({
  rowContents: [
    {
      title: 'User',
      content: rating && rating.username,
    },
    {
      title: 'Comment',
      content: rating && rating.comment,
    },
    {
      title: 'Rating',
      content: rating && (
        <StarRating
          name="starRating"
          starCount={5}
          value={rating.rating}
          emptyStarColor={color('light', 300)}
        />
      ),
    },
  ],
})

const lol = {
  id: 10,
  starting_elo: 'start elo',
  target_elo: 'target',
  price: 51,
  description: 'descr',
  totalRating: 10,
  totalRated: 1,
  latestRatings: [],
}

export const ViewBoosterProgramPageComponent: React.FunctionComponent<
  Props
> = ({
  boosterProgram,
  boosterProgramRequest,
}) => {
  const [ratingModalOpen, setRatingModalOpen] = useState(false)
  return (
    (boosterProgram && (
      <div className="pageWrapper">
        <div className="starRatingWrapper">
          <StarRating
            name="starRatingDisplay"
            starCount={5}
            value={boosterProgram.totalRating / boosterProgram.totalRated}
            emptyStarColor={color('light', 300)}
          />
          <div>{`(${boosterProgram.totalRating / boosterProgram.totalRated ||
            0}/5)`}</div>
        </div>

        <div className="upperContent">
          <div className="left-info">
            <div className="text-one-line">
            <h3 className="fixed-width">Starting Elo: </h3>
            <h3>{boosterProgram.starting_elo}</h3>
            </div>
            <div className="text-one-line">
            <h3 className="fixed-width">Target Elo: </h3>
            <h3>{boosterProgram.target_elo}</h3>
            </div>
            <div className="text-one-line">
            <h3 className="fixed-width">Price:</h3>
            <h3>{boosterProgram.price} €</h3>
            </div>
          </div>
          <div className="rightContent">
            <h3>Description</h3>
            <h4>{boosterProgram.description}</h4>
          </div>
        </div>
        <div className="ratingsWrapper">
          <div className="ratingsUpperContainer">
            <h2>Latest ratings</h2>
            <Modal
              maxWidth="550px"
              maxHeight="90%"
              minHeight="300px"
              height="auto"
              trigger={<Button>Rate</Button>}
              title="Rate boosterProgram"
              open={ratingModalOpen}
              transition
              handleModalClose={() => setRatingModalOpen(false)}>
              <CreateRatingForm
                boosterProgramId={boosterProgram.id}
                closeModal={() => setRatingModalOpen(false)}
                boosterProgramRequest={boosterProgramRequest}
              />
            </Modal>
          </div>
          <hr />
          <div className="tableWrapper">
            <Table
              data={boosterProgram.latestRatings}
              rowStructure={rowStructure}
              notFoundText="No one rated this boosterProgram yet"
            />
          </div>
        </div>
        <style jsx>
          {`
          .text-one-line {
            display: flex;
          }
          .fixed-width {
            width: 150px;
          }
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
            .left-info {
              width: 500px;
              height: max-content;
            }
            .rightContent {
              margin-left: 10px;
            }
            .pageWrapper {
              position: relative;
              display: flex;
              flex-direction: column;
              padding: 30px;
              margin: 50px;
              width: 100%;
              background-image: linear-gradient(
                to bottom right,
                ${color('grey', 800)},
                ${color('light', 700)}
              );
              border-radius: 8px;
              height: 100%;
            }
            h1,
            h2,
            h3,
            h4 {
              color: ${color('light', 300)};
            }
            .upperContent {
              display: flex;
              max-height: 700px;
            }
          `}
        </style>
      </div>
    )) || <div>Booster program not found</div>
  )
}
