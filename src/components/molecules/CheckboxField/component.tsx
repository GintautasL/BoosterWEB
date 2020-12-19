import React from 'react'
import { Flex, Checkbox } from '../..'
import { color } from '../../../theme'

export const CheckboxField = ({
  label,
  children,
  field,
  name,
  error,
  form,
  ...props
}) => (
  <Flex direction="row" alignItems="center" alignContent="auto" margin="auto">
    <Checkbox
      {...field}
      {...props}
      name={name || field.name}
      error={
        !!error ||
        (form && form.errors[field.name] && !!form.touched[field.name])
      }
      id={name || field.name}
    />
    {label && (
      <div className="labelWrapper">
        <label htmlFor={name || field.name}>{label}</label>
        {children}
      </div>
    )}
    <style jsx>
      {`
        .labelWrapper {
          padding-left: 10px;
          text-align: left;
          cursor: pointer;
          user-select: none;
          color: ${color('grey', 200)};
        }
      `}
    </style>
  </Flex>
)
