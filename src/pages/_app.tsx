import { useEffect } from 'react'
import { UserProvider } from '@auth0/nextjs-auth0'
import type { AppProps } from 'next/app'

import { TrackingProvider } from 'contexts'

const App = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <TrackingProvider>
      <Component {...pageProps} />
    </TrackingProvider>
  </UserProvider>
)

export default App
