import { UserProvider } from '@auth0/nextjs-auth0'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import type { EmotionCache } from '@emotion/cache'

import Head from 'next/head'

import { theme } from 'styles'

import { TrackingProvider } from 'contexts'

let muiCache: EmotionCache | undefined = undefined

export const createMuiCache = () =>
  (muiCache = createCache({
    key: 'mui',
    prepend: true
  }))

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta content="initial-scale=1, width=device-width" name="viewport" />
    </Head>
    <CacheProvider value={muiCache ?? createMuiCache()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider>
          <TrackingProvider>
            <Component {...pageProps} />
          </TrackingProvider>
        </UserProvider>
      </ThemeProvider>
    </CacheProvider>
  </>
)

export default appWithTranslation(App)
