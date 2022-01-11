import React, { forwardRef, Ref } from 'react'
import NextLink from 'next/link'
import { Link as MuiLink } from '@mui/material'
import type { LinkProps as NextLinkProps } from 'next/link'

import { useTracking } from 'contexts'
import type { LinkRef, LinkProps, OtherLinkProps } from './Link.d'

const Link = (
  { href, as, prefetch, onClick, tracking, children, ...props }: NextLinkProps & OtherLinkProps,
  ref: Ref<LinkRef>
) => {
  const { logEvent } = useTracking()

  const handleClick = () => {
    if (tracking) {
      const { category } = tracking
      let label = ''

      if (tracking.label) {
        label = tracking.label
      } else if (typeof children === 'string') {
        label = children
      }

      logEvent({ category, action: 'link_click', label })
    }

    if (onClick) onClick()
  }
  return (
    <NextLink passHref as={as} href={href} prefetch={prefetch}>
      <MuiLink ref={ref} onClick={handleClick} {...props}>
        {children}
      </MuiLink>
    </NextLink>
  )
}

export default forwardRef<LinkRef, LinkProps>(Link)
