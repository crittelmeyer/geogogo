import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'

import { Link } from 'components'

const Index = () => {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>{'Loading...'}</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <div>
        <Head>
          <title>{'Home'}</title>
        </Head>
        {`Welcome my friend, ${user.name}! `}
        <Link href="/test" tracking={{ category: 'header' }}>
          {'Test'}
        </Link>
        <Link href="/api/auth/logout" tracking={{ category: 'header' }}>
          {'Logout'}
        </Link>
      </div>
    )
  }

  return (
    <>
      <Link href="/api/auth/login" tracking={{ category: 'header' }}>
        {'Login'}
      </Link>
      <Link href="/test" tracking={{ category: 'header' }}>
        {'Test'}
      </Link>
    </>
  )
}

export default Index
