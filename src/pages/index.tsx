import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

// import { APP_BAR_HEIGHT } from 'styles'

// import Image from 'next/image'
import Link from 'next/link'

const Main = dynamic(() => import('components/layout/Main'))

// root: {
//   display: 'flex',
//   height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
//   minHeight: 300,
//   alignItems: 'center',
//   justifyContent: 'space-evenly'
// },
// map: {
//   border: 'solid red 2px'
// },
// rightSide: {
//   alignItems: 'center',
//   display: 'flex',
//   flexDirection: 'column',
//   height: 200,
//   justifyContent: 'space-around'
// }

const Index = () => {
  const { t } = useTranslation()

  return (
    <Main>
      <div>
        <span className="font-bold">{t('hero')}</span>
        <Link passHref href="/register">
          <button>{'Get Started'}</button>
        </Link>
        <Link passHref href="/login">
          <button>{'I Already Have An Account'}</button>
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
