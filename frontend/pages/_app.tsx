import App, { Container } from 'next/app';
import { NextContext, NextComponentType } from 'next';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

interface IProps {
  apollo: any;
}

class MyApp extends App<IProps> {
  static async getInitialProps({
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

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
