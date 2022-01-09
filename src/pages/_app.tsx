import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'

const App = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
)

export default App
