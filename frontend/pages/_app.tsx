import '../styling/global.scss'

import ApolloClient from 'apollo-client'
import { NextComponentType } from 'next'
import { AppContext } from 'next-with-apollo'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { SingletonRouter } from 'next/router'
import { ApolloProvider } from 'react-apollo'

import { Page } from '../components/main/Page/Page'
import { authCheck } from '../utils/authCheck'
import { withApolloConfigured } from '../utils/withApolloConfigured'

interface Props {
  apollo: ApolloClient<unknown>
}

export type PageComponent<T = {}> = NextComponentType<
  { query: AppContext['query'] } & T,
  T,
  AppContext
>

class MyApp extends App<Props> {
  public static async getInitialProps({
    Component,
    ctx,
    router,
  }: {
    Component: NextComponentType<Props>
    ctx: AppContext
    router: SingletonRouter
  }) {
    let pageProps
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    await authCheck(ctx, router)

    // this exposes the query to the user
    return { pageProps: { ...pageProps, query: ctx.query } }
  }

  public render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Blog Platform with GraphQL</title>
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+TC|Roboto"
            rel="stylesheet"
          />
          {process.env.NODE_ENV !== 'production' && (
            <link
              rel="stylesheet"
              type="text/css"
              href={'/_next/static/css/styles.chunk.css?v=' + Date.now()}
            />
          )}
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
