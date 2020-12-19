import React from 'react'
import { Header } from '..'
import { Flex } from '../../atoms'
import { Footer } from '../../molecules'
import { color } from '../../../theme'

export const LayoutComponent = ({ children }) => (
  <div>
    <Header />
    <Flex justifyContent="center" grow="1" className="content-container">
      {children}
    </Flex>
    <Footer />
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        box-sizing: border-box;
      }
    `}</style>
    <style jsx global>{`
      .content-container {
        min-height: calc(100vh - 60px);
        padding: 30px 20px;
        margin-top: 60px;
        background-image: radial-gradient(circle, ${color('primary', 300)} , ${color('primary', 900)});
      }
    `}</style>
  </div>
)
