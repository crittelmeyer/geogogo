import { useUser } from '@auth0/nextjs-auth0'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useRouter } from 'next/router'
import type { SelectChangeEvent } from '@mui/material'

import { makeStyles } from 'utils'

import Head from 'next/head'
import { AppBar, Container, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material'

import { Link } from 'components/base'

type MainProps = {
  children: JSX.Element | JSX.Element[] | string | string[]
  className?: string
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
  language: { width: 200 },
  user: {
    flexGrow: 0
  }
}))

const Main = ({ children, className }: MainProps) => {
  const { classes } = useStyles()
  const { user, error, isLoading } = useUser()
  const router = useRouter()

  const handleChange = (event: SelectChangeEvent) => {
    router.push(router.asPath, null, { locale: event.target.value })
  }

  if (isLoading) return <div>{'Loading...'}</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>{'GeoGoGo - Borderless Learning'}</title>
      </Head>
      <header>
        <AppBar color="secondary" position="sticky">
          <Toolbar>
            <Typography noWrap variant="h6">
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
            <FormControl size="small">
              <InputLabel id="demo-simple-select-label">{'Site Language'}</InputLabel>
              <Select
                className={classes.language}
                id="select-language"
                label="Site Language"
                labelId="select-language"
                value={router.locale}
                onChange={handleChange}
              >
                <MenuItem value="en">{'English'}</MenuItem>
                <MenuItem value="es">{'Espanol'}</MenuItem>
              </Select>
            </FormControl>
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
      </header>
      <LazyMotion features={domAnimation}>
        <m.div
          animate="enter" // Animated state to variants.enter
          className=""
          exit="exit" // Exit state (used later) to variants.exit
          initial="hidden" // Set the initial state to variants.hidden
          transition={{ type: 'linear' }} // Set the transition to linear
          variants={variants} // Pass the variant object into Framer Motion
        >
          <Container className={className}>{children}</Container>
        </m.div>
      </LazyMotion>
    </>
  )
}

export default Main
