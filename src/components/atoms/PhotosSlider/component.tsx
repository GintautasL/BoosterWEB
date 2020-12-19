import React from 'react'
import SlickSlider from 'react-slick'
import { color } from '../../../theme'
// import triangleRight from '../../../resources/images/triangle_right.svg'
// import triangleLeft from '../../../resources/images/triangle_left.svg'

interface Props {
  children: any
  customPaging?: Function
  initialSlide: Number
}

export const PhotosSlider: React.FunctionComponent<Props> = ({
  children,
  customPaging,
  initialSlide,
  ...props
}) => (
  <div>
    <SlickSlider
      className="photosSliderWrapper"
      dots
      customPaging={customPaging}
      initialSlide={initialSlide}
      {...props}>
      {children}
    </SlickSlider>
    <style jsx global>{`
      .slick-dots {
        bottom: initial;
        position: relative;
      }
      .slick-dots li {
        width: auto;
      }
      .slick-next::before, .slick-prev::before {
        display: none
      }
    `}</style>
  </div>
)
