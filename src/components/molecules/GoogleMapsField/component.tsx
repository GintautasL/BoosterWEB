import React, { useState } from 'react'
import { color } from '../../../theme'
import { GoogleMaps } from '../GoogleMaps/component'

const googleMapsContainerStyles = {
  height: '300px',
  marginBottom: '10px',
}

export const GoogleMapsField = ({
  label,
  children,
  field,
  name,
  error,
  form,
  ...props
}) => {
  const [marker, setMarker] = useState(field.value || null)

  const onMapClick = ({ latLng }) => {
    const { setFieldValue } = form
    const position = { lat: latLng.lat(), lng: latLng.lng() }
    setFieldValue(name || field.name, position)
    setMarker(position)
  }
  return (
    <>
      {label && (
        <div className="labelWrapper">
          <label htmlFor={name || field.name}>{label}</label>
          {children}
        </div>
      )}
      <GoogleMaps
        markers={[marker]}
        onMapClick={onMapClick}
        containerStyles={googleMapsContainerStyles}
        {...field}
        {...props}
        name={name || field.name}
        id={name || field.name}
      />

      <style jsx>
        {`
          .labelWrapper {
            text-align: left;
            cursor: pointer;
            user-select: none;
            font-weight: 800;
            margin-bottom: 4px;
            color: ${color('grey', 200)};
          }
        `}
      </style>
    </>
  )
}
