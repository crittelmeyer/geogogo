import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

// import { APP_BAR_HEIGHT } from 'styles'

import Image from 'next/image'
import Link from 'next/link'

const Main = dynamic(() => import('components/layout/Main'))

const Index = () => {
  const { t } = useTranslation()

  return (
    <Main className="container mx-auto flex items-center justify-between px-56">
      <Image alt="world map pixel art" height={224} src="/images/PixelMap.png" width={445} />

      <div className="flex flex-col items-center space-y-4">
        <span className="font-bold">{t('hero')}</span>
        <Link passHref href="/register">
          <button className="h-12 w-full rounded-lg border-2 border-double border-yellow-400 bg-yellow-100 px-4 shadow-sm shadow-yellow-900 hover:border-yellow-500 hover:bg-yellow-200 active:translate-y-0.5 active:shadow-transparent">
            {'Get Started'}
          </button>
        </Link>
        <Link passHref href="/login">
          <button className="h-12 w-full rounded-lg border-2 border-double border-slate-300 px-4 hover:border-slate-700">
            {'I Already Have An Account'}
          </button>
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
