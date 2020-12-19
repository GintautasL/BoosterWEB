import React from 'react'
import { color } from '../../../theme'
import { Flex, Image } from '../..'
import { images } from '../../../utils'
import config from '../../../config'
import { pages } from '../../pages'

interface Props {
  onSelect: Function
  uploadList: Array<any>
  thumbnail: Number
  onRemove: Function
  readOnly: boolean
}

export const ThumbnailGallery: React.FunctionComponent<Props> = ({
  uploadList,
  onSelect,
  onRemove,
  thumbnail,
  readOnly = false,
}) => (
  <div className="photoGalleryWrapper">
    {uploadList.length > 0 && (
      <span className="photoGalleryText">
        {uploadList.length > 1 && 'Select main photo'}
      </span>
    )}
    {uploadList.length > 0 && (
      <div className="photoGalleryThumbnails">
        {uploadList.map(id => {
          return (
            <div key={id} className="photoWrapper">
              <div
                role="button"
                tabIndex={0}
                onClick={() => onSelect(id)}
                className={`photoOverlay ${
                  thumbnail === id ? 'activeOverlay' : ''
                }`}>
                {thumbnail === id && <Image src={images.checkbox} />}
              </div>
              {!readOnly && (
                <button
                  className="photoRemove"
                  onClick={() => onRemove(id)}
                  type="button">
                  <Image src={images.close} width="12px" height="12px" />
                </button>
              )}
              {id && (
                <Image
                  src={`${config.apiUrl}/photo/${id}`}
                  width="100%"
                  height="100%"
                />
              )}
            </div>
          )
        })}
      </div>
    )}
    <style jsx>
      {`
        .photoGalleryWrapper {
          display: flex;
          flex-direction: column;
        }
        .photoGalleryText {
          display: flex;
          padding: 15px 0px 3px 0px;
          min-height: 20px;
          box-sizing: content-box;
          color: ${color('light', 200)};
        }
        .photoGalleryThumbnails {
          display: flex;
          flex-wrap: wrap;
          margin-left: -6px;
        }
        .photoWrapper {
          position: relative;
          width: 100%;
          max-width: 80px;
          max-height: 65px;
          margin: 6px 5px;
          
          border-radius: 4px;
        }
        .photoOverlay {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          background: ${color('dark', 100, 0.68)};
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          opacity: 0;
          transition: all 0.4s ease-in-out 0s;
        }
        .photoOverlay:hover {
          opacity: 1;
        }
        .activeOverlay {
          opacity: 1;
        }
        .photoRemove {
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          outline: none;
          position: absolute;
          top: -8px;
          right: -8px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          padding: 0;
          cursor: pointer;
          background-color: ${color('light')};
        }
      `}
    </style>
  </div>
)
