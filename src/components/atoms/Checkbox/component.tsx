import * as React from 'react'
import { color } from '../../../theme'
import { Image } from '..'
import { images } from '../../../utils'

export const Checkbox = ({ readOnly, error, id }) => (
  <label htmlFor={id} className="checkbox-wrapper">
    <input id={id} type="checkbox" className="input" />
    <span className="span">
      <Image src={images.checkbox} height="9px" width="12px" />
    </span>
    <style jsx>
      {`
        input {
            position: absolute;
            opacity: 1;
            left: -9999px;
          }
          input:checked + span {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid ${color('grey', 500)};
            background: ${color('grey', 500)};
          }
          span {
            cursor: ${readOnly ? 'default' : 'pointer'};
            display: flex;
            top: 0px;
            left: 0px;
            overflow: hidden;
            width: 20px;
            height: 20px;
            border: 
              1px solid ${error ? color('primary') : color('grey', 400)};
            border-radius: 4px;
            background: white;
            user-select: none;
          },
        `}
    </style>
  </label>
)
