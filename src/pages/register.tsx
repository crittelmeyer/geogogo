import { makeStyles } from 'utils'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

// import { Main } from 'components/layout'

const Main = dynamic(() => import('components/layout/Main'))

const useStyles = makeStyles({
  name: 'Register'
})((theme) => ({
  root: {}
}))

const Register = () => {
  const { classes } = useStyles()
  const { t } = useTranslation('register')

  return (
    <Main className={classes.root}>
      <div>{t('i-want-to-learn-about')}</div>
    </Main>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['register']))
    }
  }
}

export default Register
