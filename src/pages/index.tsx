import { makeStyles } from 'utils'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic, { DynamicOptions } from 'next/dynamic'

import { APP_BAR_HEIGHT } from 'styles'

import Image from 'next/image'
import Link from 'next/link'
import type { ButtonProps } from '@mui/material/Button/Button.d'
import type { TypographyProps } from '@mui/material/Typography/Typography.d'

const Button = dynamic<ButtonProps>(import('@mui/Material/Button') as DynamicOptions<{}>, {})
const Typography = dynamic<TypographyProps>(import('@mui/Material/Typography') as DynamicOptions<{}>, {})

const Main = dynamic(() => import('components/layout/Main'))

const useStyles = makeStyles({
  name: 'Index'
})((theme) => ({
  root: {
    display: 'flex',
    height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
    minHeight: 300,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  map: {
    border: 'solid red 2px'
  },
  rightSide: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    justifyContent: 'space-around'
  }
}))

const Index = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()

  return (
    <Main className={classes.root}>
      <Image alt="world map pixel art" className={classes.map} height={224} src="/images/PixelMap.png" width={445} />

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
