import '../styling/global.scss'

import ApolloClient from 'apollo-client'
import { NextComponentType, NextContext } from 'next'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from 'react-apollo'

import { Page } from '../components/main/Page/Page'
import { withApolloConfigured } from '../utils/withApolloConfigured'

interface Props {
  apollo: ApolloClient<unknown>
}

class MyApp extends App<Props> {
  public static async getInitialProps({
    Component,
    ctx,
  }: {
    Component: NextComponentType<Props>
    ctx: NextContext
  }) {
    let pageProps
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // this exposes the query to the user

    return { pageProps: { ...pageProps, query: ctx.query } }
  }

  public render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+TC|Roboto"
            rel="stylesheet"
          />
        </Head>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloConfigured(MyApp)
