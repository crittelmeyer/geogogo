import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta content="initial-scale=1, width=device-width" name="viewport" />
    </Head>
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  </>
)

export default appWithTranslation(App)
