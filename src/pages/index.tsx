import { useUser } from '@auth0/nextjs-auth0'

type FooProps = {
  name: string
  bar: string
}

const FooBar = ({ name }: FooProps) => {
  return <a href="/foo" target="_blank">{`hey, ${name}`}</a>
}

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
        <a href="/api/auth/logout">{'Logout'}</a>
        {items.map((item) => (
          <FooBar key={item.id} bar="coo" name={item.name} />
        ))}
      </div>
    )
  }

  return <a href="/api/auth/login">{'Login'}</a>
}

Index.defaultProps = {
  apple: 'foo',
  beta: 'bar'
}

export default Index
