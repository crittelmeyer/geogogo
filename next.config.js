const withPlugins = require('next-compose-plugins')
const withPwa = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { withSentryConfig } = require('@sentry/nextjs')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const { i18n } = require('./next-i18next.config')

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(
  withPlugins([
    withBundleAnalyzer,
    [
      withPwa,
      {
        pwa: {
          dest: 'public',
          disable: process.env.NODE_ENV === 'development',
          runtimeCaching,
          buildExcludes: [/middleware-manifest\.json$/]
        }
      }
    ],
    {
      i18n,
      silent: true,
      swcMinify: true
      // TODO: enable once next.js support top-level awaits, then update src/contexts/tracking.tsx react-ga4 import
      // experiments: {
      //   topLevelAwait: true
      // }
    }
  ])
)
