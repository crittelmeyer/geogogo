import { makeStyles } from 'utils'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic, { DynamicOptions } from 'next/dynamic'

import { APP_BAR_HEIGHT } from 'styles'

import { Button, Typography } from '@mui/material'
import Link from 'next/link'

import { Main } from 'components/layout'
import type { PixelWorldMapProps } from 'components/base/PixelWorldMap/PixelWorldMap.d'

const PixelWorldMap = dynamic<PixelWorldMapProps>(import('components/base/PixelWorldMap') as DynamicOptions<{}>, {})

const useStyles = makeStyles({
  name: 'Index'
})((theme) => ({
  root: {
    display: 'flex',
    height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
    justifyContent: 'space-evenly',
    paddingBottom: theme.spacing(16),
    paddingTop: theme.spacing(16)
  },
  rightSide: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: theme.spacing(2, 0, 8)
  }
}))

const Index = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()

  return (
    <Main className={classes.root}>
      <PixelWorldMap animationPattern="diagonal" />

      <div className={classes.rightSide}>
        <Typography>{t('hero')}</Typography>
        <Link passHref href="/register">
          <Button variant="contained">{'Get Started'}</Button>
        </Link>
        <Link passHref href="/login">
          <Button variant="outlined">{'I Already Have An Account'}</Button>
        </Link>
      </div>
    </Main>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale))
    }
  }
}

export default Index
