import './_app.scss';

import { NextComponentType, NextContext } from 'next';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';

import { Page } from '../components/Page/Page';
import withData from '../lib/withData';

interface Props {
  apollo: any;
}

class MyApp extends App<Props> {
  public static async getInitialProps({
    Component,
    ctx
  }: {
    Component: NextComponentType<any>;
    ctx: NextContext;
  }) {
    if (Component.getInitialProps) {
      var pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user

    return { pageProps: { ...pageProps, query: ctx.query } };
  }

  public render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
