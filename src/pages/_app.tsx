import { UserProvider } from '@auth0/nextjs-auth0'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import type { AppProps } from 'next/app'
import type { EmotionCache } from '@emotion/cache'

import { TrackingProvider } from 'contexts'
import { theme } from 'styles'

let muiCache: EmotionCache | undefined = undefined

export const createMuiCache = () =>
  (muiCache = createCache({
    key: 'mui',
    prepend: true
  }))

const App = ({ Component, pageProps }: AppProps) => (
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
)

export default App
