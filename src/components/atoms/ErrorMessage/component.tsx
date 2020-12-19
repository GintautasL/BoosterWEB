import React from 'react'

export const ErrorMessage = ({ children }) => (
  <React.Fragment>
    <span className="error">
      {children}
    </span>
    <style jsx>
      {`
      span {
        width: 100%;
        min-height: 19px;
        text-align: left;
        white-space: pre-wrap;
        box-sizing: content-box;
        color: red;
        font-size: 14px;
      }`}
    </style>
  </React.Fragment>
)
