import React from 'react'
import { Flex } from '../..'
import StarRating from 'react-star-rating-component'
import { color } from '../../../theme'

export const StarRatingField = ({
  label,
  children,
  field,
  name,
  error,
  form,
  ...props
}) => (
  <div className="ratingFieldWrapper">
    {label && (
      <div className="labelWrapper">
        <label htmlFor={name || field.name}>{label}</label>
        {children}
      </div>
    )}
    <StarRating
      emptyStarColor={color('light', 600)}
      onStarClick={val => {
        const { setFieldValue } = form
        setFieldValue(name || field.name, val)
      }}
      {...field}
      {...props}
      name={name || field.name}
      error={
        !!error ||
        (form && form.errors[field.name] && !!form.touched[field.name])
      }
      id={name || field.name}
    />

    <style jsx>
      {`
        .ratingFieldWrapper {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          align-content: center;
          margin: auto;
          font-size: 46px;
        }
        .labelWrapper {
          padding-left: 10px;
          text-align: left;
          cursor: pointer;
          user-select: none;
          color: ${color('grey', 200)};
        }
      `}
    </style>
  </div>
)
