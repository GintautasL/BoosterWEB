import React from 'react'
import { font, color as colorFunc } from '../../../theme'
import NextJSLink from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  width?: string
  noStyles?: boolean
  borderRadius?: string
  color?: string
  textColor?: string
  to?: string
}

const ConditionalLinkWrapper = ({ to, children }) =>
  to ? <NextJSLink href={to}>{children}</NextJSLink> : children

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  loading,
  disabled,
  type,
  onClick,
  width,
  noStyles,
  color,
  textColor,
  borderRadius,
  className,
  style,
  to,
}) => (
  <ConditionalLinkWrapper to={to}>
    <button
      type={type}
      onClick={onClick}
      className={noStyles ? 'buttonWithoutStyles' : 'button'}
      disabled={disabled}
      style={style}>
      {children}
      <style jsx>
        {`
          .button {
            transition: 200ms ease-in-out;
            background-size: 220% 500%;
            outline: none;
            background-position: 100% 100%;
            background-color: ${color || 'transparent'};
            color: ${textColor || colorFunc('grey', 200)};
            border: 2px solid ${colorFunc('grey', 300)};
            display: inline-flex;
            border-radius: ${loading ? '50%' : borderRadius || '26px'};
            justify-content: center;
            align-items: center;
            min-width: ${loading ? '52px' : width};
            width: ${loading ? '52px' : width};
            height: 52px;
            font-weight: 600;
            font-size: 12;
            text-transform: uppercase;
            padding: ${loading ? '5px' : '5px 20px'};
            text-decoration: none;
            text-align: center;
            cursor: pointer;
            pointer-events: ${disabled ? 'none' : 'auto'};
            user-select: none;
          }
          .button:focus {
            outline: 'none';
          }
          .button:hover:not([disabled]) {
            box-shadow: inset 0 0 30px 0 ${colorFunc('light', 300, 0.32)};
            background-size: 300% 300%;
            background-position: 0% 0%;
          }
          .button:active:not([disabled]) {
            background-image: red;
            box-shadow: inset 0 0 35px 0 ${colorFunc('light', 300, 0.62)};
          }
          .button:disabled,
          .button[disabled]:not([disabled='false']) {
            cursor: default;
            background-image: ${loading && colorFunc('light', 500)};
          }
          buttonwithoutstyles {
            border: none;
            background: none;
            outline: none;
            padding: 0px;
          }
        `}
      </style>
    </button>
  </ConditionalLinkWrapper>
)

Button.defaultProps = {
  type: 'button',
  loading: false,
  noStyles: false,
  width: 'auto',
}
