import React from 'react'

export const Image = ({
  src = '',
  alt = '',
  height = 'auto',
  width = 'auto',
  ...props
}) => {
  if (!src) return null
  const isFullSrc = src.includes('/')
  if (!isFullSrc) {
    src = `/static/images/${src}`
  }
  return (
    <React.Fragment>
      <img alt={alt} height={height} width={width} src={src} {...props} />
      <style jsx>{`
        img {
          box-sizing: content-box;
          min-width: ${width};
          min-height: ${height};
        }
      `}</style>
    </React.Fragment>
  )
}
