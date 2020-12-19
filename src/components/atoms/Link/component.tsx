import React from 'react'
import { color } from '../../../theme'
import NextJSLink from 'next/link'

export const Link = ({ href, children, bold = true, className = '' }) => (
  <NextJSLink href={href}>
    <a className={className}>
      {children}
      <style jsx>{`
        a {
          text-decoration: none;
          font-weight: ${bold ? 600 : 400};
          color: white;
        }
      `}</style>
    </a>
  </NextJSLink>
)
