import type { LinkProps as MuiLinkProps } from '@mui/material'
import type { LinkProps as NextLinkProps } from 'next/link'

export type Tracking = {
  category?: string
  label?: string
}

export type OtherLinkProps = {
  children: JSX.Element | string
  onClick?: Function
  tracking?: Tracking
}

export type LinkRef = HTMLAnchorElement

export type LinkProps = Omit<MuiLinkProps, 'href' | 'classes'> &
  Pick<NextLinkProps, 'href' | 'as' | 'prefetch'> &
  OtherLinkProps
