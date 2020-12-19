import React from 'react'
import { color } from '../../../theme'
import { Flex } from '..'

export const Input = ({
  children,
  error = '',
  field,
  form,
  type,
  label = '',
  disabled = false,
  ...props
}) => {
  return (
    <Flex position="relative" direction="column">
      <label>{label}</label>
      {type === 'textarea' ? (
        <textarea {...field} {...props} title={label} />
      ) : (
        <input {...field} {...props} type={type} title={label} disabled={disabled}/>
      )}
      <style jsx>
        {`
          input, textarea {
            resize: none;
            width: 100%;
            outline: none;
            box-sizing: border-box;
            height: ${type === 'textarea' ? 'auto' : '40px'};
            min-height: ${type === 'textarea' ? '84px' : 'auto'};
            background-color: ${color('grey', 200)};
            color: black;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 8px;
            padding-bottom: 8px;
            border-radius: 4px;
            font-size: 14px;
            border: 1px solid
              ${form && form.errors[field.name] && form.touched[field.name]
                ? 'red'
                : 'transparent'};
          }
          label {
            display: block;
            color: ${color('grey', 300)};
            font-size: 16px;
            font-weight: 600;
            pointer-events: none;
            margin-bottom: 4px;
          }
        `}
      </style>
    </Flex>
  )
}
