import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  test () {
    console.log('> test')
  }

  render() {
    const { Component, pageProps } = this.props
    { this.test() }
    return <div>
      <Layout title="About | Next.js + TypeScript Example">
        <Component {...pageProps} />
      </Layout>
    </div>
  }
}

export default MyApp
