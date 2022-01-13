import { AppBar, Toolbar, Typography } from '@mui/material'
import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { makeStyles } from 'utils'

import { Link } from 'components/base'

type MainProps = {
  children: JSX.Element | JSX.Element[] | string | string[]
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
}

const useStyles = makeStyles({ name: 'MainLayout' })((theme) => ({
  menu: {
    display: 'flex',
    flexGrow: 1
  },
  link: { marginLeft: theme.spacing(1) },
  user: {
    flexGrow: 0
  }
}))

const Main = ({ children }: MainProps) => {
  const { classes } = useStyles()
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>{'Loading...'}</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>{'GeoGoGo - Borderless Learning'}</title>
      </Head>
      <AppBar color="secondary" position="sticky">
        <Toolbar>
          <Typography noWrap component="div" variant="h6">
            {'GeoGoGo'}
          </Typography>
          <div className={classes.menu}>
            <Link className={classes.link} href="/" tracking={{ category: 'header' }}>
              {'Home'}
            </Link>
            <Link className={classes.link} href="/test" tracking={{ category: 'header' }}>
              {'Test'}
            </Link>
          </div>
          <div className={classes.user}>
            {user ? (
              <>
                {`Welcome my friend, ${user.name}! `}

                <Link href="/api/auth/logout" tracking={{ category: 'header' }}>
                  {'Logout'}
                </Link>
              </>
            ) : (
              <Link href="/api/auth/login" tracking={{ category: 'header' }}>
                {'Login'}
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <LazyMotion features={domAnimation}>
        <m.div
          animate="enter" // Animated state to variants.enter
          className=""
          exit="exit" // Exit state (used later) to variants.exit
          initial="hidden" // Set the initial state to variants.hidden
          transition={{ type: 'linear' }} // Set the transition to linear
          variants={variants} // Pass the variant object into Framer Motion
        >
          {children}
        </m.div>
      </LazyMotion>
    </>
  )
}

export default Main
