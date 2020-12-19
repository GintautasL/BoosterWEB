import React, { FunctionComponent } from 'react'
import { pages } from '../..'
import { color } from '../../../theme'
import { Image, Flex, Link } from '../..'
import { images } from '../../../utils'
import { HeaderMenu } from '../../molecules'

export const Header = () => (
  <header>
    <div className="header-content">
      <Link href={pages.homepage.path} className="header-logo">
        <Image src={images.logoSmall} height="40px" alt="logo" />
      </Link>
      <Flex>
        <HeaderMenu />
      </Flex>
    </div>
    <style jsx>
      {`
        header {
          display: flex;
          height: 60px;
          width: 100%;
          justify-content: center;
          background-color: ${color('grey', 800)};
          z-index: 10;
          position: fixed;
        }
        .header-content {
          display: flex;
          width: 100%;
          max-width: 1440px;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }
      `}
    </style>
    <style jsx global>
      {`
        .header-logo {
          height: 40px;
        }
      `}
    </style>
  </header>
)
