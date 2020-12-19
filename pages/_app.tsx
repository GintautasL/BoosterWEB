import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import configureStore from '../src/store/configureStore'
import { Layout } from '../src/components'
import { Store } from 'redux'
import Head from 'next/head'

interface MyAppProps {
  store: Store
}

/**
 * @param {object} initialState
 * @param {boolean} options.isServer
 * @param {Request} options.req
 * @param {Request} options.res
 * @param {boolean} options.debug
 * @param {string} options.storeKey
 */

class MyApp extends App<MyAppProps, {}, {}> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <>
        <Head>
          <title>GraffitiTour</title>
        </Head>
        <Provider store={store}>

          <Layout>

            <Component {...pageProps} />
          </Layout>
          <style jsx global>
            {`
            @font-face {
              font-family: 'Overpass';
              src: url('/static/fonts/Overpass-Regular.ttf') format('truetype');
            }
            body {
              margin: 0px;
              font-family: 'Overpass', sans-serif;
            }
          `}
          </style>
        </Provider>
      </>
    )
  }
}

export default withRedux(configureStore)(MyApp)
