import { createContext, useContext, useEffect, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga4'

// TODO: enable once next.js supports top-level await
// const ReactGA = (await import('react-ga4')).default

import type { Event, TrackingProviderProps } from './tracking.d'

const TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
const TrackingContext = createContext({
  logGtagEvent: (event: string, options: {}) => null,
  logEvent: (event: Event) => null
})

const TrackingProvider = ({ children }: TrackingProviderProps) => {
  const auth = useUser()
  const router = useRouter()
  let userName: string
  let loginMethod: string

  if (!auth.isLoading) {
    userName = auth?.user?.name
    loginMethod = auth?.user?.sub?.split('|')[0]
  }

  // we create a default state to keep track of whether GA has been initialized and if we're tracking a unique user
  const [analytics, setAnalytics] = useState({ isInitialized: false, hasUser: false })

  const logGtagEvent = (event: string, options: {}) => {
    if (analytics.isInitialized) {
      ReactGA.gtag('event', event, options)
    }
  }
  const logEvent = ({ category = '', action = '', label = '' }) => {
    if (analytics.isInitialized) {
      ReactGA.event({ category, action, label })
    }
  }

  // We only want to initialize GA on the client side - this will fail if you're trying to initialize server side
  // useEffect will help us handle this case as it only runs client side
  useEffect(() => {
    const handleRouteChange = (page: string) => {
      ReactGA.set({ page })
      ReactGA.send('pageview')
    }

    // initialize GA with our tracking id
    if (!analytics.isInitialized) {
      ReactGA.initialize(TRACKING_ID, {
        legacyDimensionMetric: false,
        gtagOptions: { send_page_view: false },
        gaOptions: { userId: userName }
      })

      // Handle all route changes
      router.events.on('routeChangeComplete', handleRouteChange)

      setAnalytics((prev) => ({
        ...prev,
        isInitialized: true,
        hasUser: Boolean(userName)
      }))
    } else if (analytics.isInitialized && !analytics.hasUser && Boolean(userName)) {
      // in case we don't have the user initially, we handle setting a user in our tracker
      ReactGA.set({ userId: userName })
      ReactGA.gtag('event', 'login', { method: loginMethod })

      setAnalytics((prev) => ({
        ...prev,
        hasUser: Boolean(userName)
      }))
    }

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [analytics.isInitialized, analytics.hasUser, loginMethod, router, userName])

  return <TrackingContext.Provider value={{ logGtagEvent, logEvent }}>{children}</TrackingContext.Provider>
}

const useTracking = () => useContext(TrackingContext)

export { TrackingProvider, useTracking }
