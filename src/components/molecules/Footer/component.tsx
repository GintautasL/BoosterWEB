import React from 'react'
import { Link, Flex, Image } from '../..'
import { color, media } from '../../../theme'
import { pages } from '../../../components'
import { images } from '../../../utils'

const firstColumnPages = () => [pages.about]

export const Footer = () => (
  <footer className="footer">
    <div className="higher-container">
      <div className="column">
        <div className="logo-container">
          <Image src={images.logo} height="70px" />
        </div>
      </div>
      <div className="column">
        <h3>L0L B00st3r 420</h3>
        <ul>
          <li className="footer-link">
            <Link bold={false} href={pages.about.path}>
              {pages.about.title}
            </Link>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Information</h3>
        <div>
          <span className="contact-email-text">Contact email</span>
        </div>
        <span className="contact-email">fake.email@gmail.com</span>
      </div>
    </div>
    <hr />
    <div className="lower-container">
      <span className="year-text">{new Date().getFullYear()} </span>
    </div>
    <style jsx>
      {`
        hr {
          margin: 0;
          border: 1px solid ${color('grey', 400)};
        }
        h3 {
          color: ${color('grey', 200)};
        }
        .year-text {
          font-weight: 600;
          color: ${color('grey', 200)};
          font-size: 20px;
        }
        .contact-email-text {
          color: ${color('grey', 200)};
        }
        .contact-email {
          font-weight: 600;
          color: ${color('grey', 200)};
        }
        ul {
          padding-left: 18px;
          color: ${color('grey', 200)};
        }
        .footer {
          display: flex;
          flex-direction: column;
          min-height: 240px;
          background-color: ${color('grey', 800)};
        }
        .higher-container {
          display: flex;
          flex-grow: 1;
          padding: 15px 50px;
        }
        @media ${media()} {
          .higher-container {
            flex-direction: column;
          }
        }
        .logo-container {
          margin-top: 30px;
        }
        .column {
          flex-grow: 1;
          flex-basis: 0;
        }
        .lower-container {
          padding: 5px;
          text-align: center;
        }
      `}
    </style>
  </footer>
)
