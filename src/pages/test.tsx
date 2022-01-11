import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
  const { error, isLoading } = useUser()

  if (isLoading) return <div>{'Loading...'}</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>{'Test'}</title>
      </Head>
      <Link href="/" tracking={{ category: 'header' }}>
        {'Home'}
      </Link>
    </>
  )
}

export default Index
