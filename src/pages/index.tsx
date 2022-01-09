import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'

type FooProps = {
  name: string
  bar: string
}

const FooBar = ({ name }: FooProps) => (
  <button
    type="button"
    onClick={() => {
      throw new Error('Sentry Frontend Error')
    }}
  >
    {`Throw error, ${name}`}
  </button>
)

type IndexProps = {
  apple?: string
  beta?: string
}

const Index = ({ apple, beta }: IndexProps) => {
  const { user, error, isLoading } = useUser()

  const items = [
    { id: 1, name: 'Chris' },
    { id: 2, name: 'Joe' }
  ]

  const handleClick = () => {
    console.log(`do it! ${apple} ${beta}`)
  }

  const handleKeyUp = () => {
    console.log('do it')
  }

  if (isLoading) return <div>{'Loading...'}</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <div role="button" tabIndex={0} onClick={handleClick} onKeyUp={handleKeyUp}>
        {`Welcome my friend, ${user.name}! `}
        <Link href="/api/auth/logout">{'Logout'}</Link>
        {items.map((item) => (
          <FooBar key={item.id} bar="coo" name={item.name} />
        ))}
      </div>
    )
  }

  return <Link href="/api/auth/login">{'Login'}</Link>
}

Index.defaultProps = {
  apple: 'foo',
  beta: 'bar'
}

export default Index
