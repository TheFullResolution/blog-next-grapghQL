import '../styling/global.scss';

import ApolloClient from 'apollo-client';
import { NextComponentType } from 'next';
import { AppContext } from 'next-with-apollo';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { SingletonRouter } from 'next/router';
import { ApolloProvider } from 'react-apollo';

import { Page } from '../components/main/Page/Page';
import { authCheck } from '../utils/authCheck';
import { withApolloConfigured } from '../utils/withApolloConfigured';

interface Props {
  apollo: ApolloClient<unknown>
}

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
