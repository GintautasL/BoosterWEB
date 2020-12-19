import React from 'react'

export const Flex = ({
  direction = 'row',
  wrap = 'no-wrap',
  justifyContent = 'flex-start',
  alignContent = 'stretch',
  alignItems = 'stretch',
  order = '0',
  grow = '0',
  shrink = '1',
  basis = 'auto',
  position = 'static',
  children,
  ...props
}) => (
  <div {...props}>
    {children}
    <style jsx>
      {`
        div {
          display: flex;
          flex-direction: ${direction};
          flex-wrap: ${wrap};
          align-items: ${alignItems};
          justify-content: ${justifyContent};
          order: ${order};
          flex-grow: ${grow};
          flex-shrink: ${shrink};
          flex-basis: ${basis};
          position: ${position};
          align-content: ${alignContent};
        }
      `}
    </style>
  </div>
)
