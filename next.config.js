const withPlugins = require('next-compose-plugins')
const withPwa = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const { i18n } = require('./next-i18next.config')

module.exports = withPlugins([
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
