/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-var-requires */
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withPlugins([
  [
    withTypescript,
    {
      webpack(config, options) {
        // Do not run type checking twice:
        if (options.isServer)
          config.plugins.push(new ForkTsCheckerWebpackPlugin())

        return config
      },
    },
  ],
  [
    withCSS,
    {
      cssLoaderOptions: {
        url: false
      }
    },
  ],
  [
    withSass,
    {
      sassLoaderOptions: {
        data: '@import "./index";',
        includePaths: [`${__dirname}/styling`],
      },
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[path]___[local]___[hash:base64:5]',
      },
      [PHASE_PRODUCTION_BUILD]: {
        cssLoaderOptions: {
          localIdentName: '[hash:base64:8]',
        },
      },
    },
  ],
])
