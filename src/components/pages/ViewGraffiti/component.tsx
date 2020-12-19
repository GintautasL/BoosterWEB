import React, { useState } from 'react'
import { get } from 'lodash'
import { PhotosSlider, Image, GoogleMaps } from '../..'
import { GraffitiWithPhotos } from '../../../store/graffities/types'
import StarRating from 'react-star-rating-component'
import config from '../../../config'
import { color } from '../../../theme'
import { Button } from '../../atoms'
import { Table, Modal } from '../../molecules'
import { CreateRatingForm } from '../../organisms/RateGraffitiForm'

interface Props {
  graffiti: GraffitiWithPhotos
  graffitiRequest: Function
}

const googleMapsContainerStyles = {
  height: '100%',
}

const getMainPhotoIndex = graffiti => {
  return get(graffiti, 'photos', []).findIndex(
    upload => upload.id === graffiti.thumbnail,
  )
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

export const ViewGraffitiPageComponent: React.FunctionComponent<Props> = ({
  graffiti,
  graffitiRequest,
}) => {
  const [ratingModalOpen, setRatingModalOpen] = useState(false)
  return (
    graffiti && (
      <div className="pageWrapper">
        <div className="starRatingWrapper">
          <StarRating
            name="starRatingDisplay"
            starCount={5}
            value={graffiti.totalRating / graffiti.totalRated}
            emptyStarColor={color('light', 300)}
          />
          <div>{`(${graffiti.totalRating / graffiti.totalRated || 0}/5)`}</div>
        </div>

        <div className="upperContent">
          <div className="sliderWrapper">
            <PhotosSlider
              customPaging={i => {
                return (
                  <Image
                    src={`${config.apiUrl}/photo/${get(
                      graffiti,
                      `photos[${i}].id`,
                    )}`}
                    width="100px"
                    height="100px"
                    style={{ marginTop: 20 }}
                  />
                )
              }}
              initialSlide={getMainPhotoIndex(graffiti)}>
              {get(graffiti, 'photos', []).map(upload => {
                return (
                  <div key={upload.id} className="photoSliderImageWrapper">
                    <Image
                      src={`${config.apiUrl}/photo/${upload.id}`}
                      className="photo"
                      style={{ marginLeft: 'auto', marginRight: 'auto' }}
                      height="400px"
                    />
                  </div>
                )
              })}
            </PhotosSlider>
          </div>
          <div className="rightContent">
            <h1>{graffiti.name}</h1>
            <h4>{graffiti.description}</h4>
          </div>
        </div>
        <div className="googleMapsWrapper">
          <GoogleMaps
            containerStyles={googleMapsContainerStyles}
            markers={[graffiti]}
            defaultCenter={{ lat: graffiti.lat, lng: graffiti.lng }}
            defaultZoom={12}
          />
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
              title="Rate graffiti"
              open={ratingModalOpen}
              transition
              handleModalClose={() => setRatingModalOpen(false)}>
              <CreateRatingForm
                graffitiId={graffiti.id}
                closeModal={() => setRatingModalOpen(false)}
                graffitiRequest={graffitiRequest}
              />
            </Modal>
          </div>
          <hr />
          <div className="tableWrapper">
            <Table
              data={graffiti.latestRatings}
              rowStructure={rowStructure}
              notFoundText="No one rated this graffiti yet"
            />
          </div>
        </div>
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
            }
            h1,
            h2,
            h4 {
              color: ${color('light', 300)};
            }
            .upperContent {
              display: flex;
              max-height: 700px;
            }
            .googleMapsWrapper {
              width: 100%;
              height: 500px;
              margin-top: 30px;
            }
          `}
        </style>
      </div>
    )
  )
}
