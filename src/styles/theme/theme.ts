import { createTheme } from '@mui/material/styles'

import { overrides } from './overrides'
import { palette } from './palette'
import { typography } from './typography'

export const BORDER_RADIUS = 8
export const SPACING_FACTOR = 8

export const theme = createTheme({
  palette,
  spacing: SPACING_FACTOR,
  shape: { borderRadius: BORDER_RADIUS },
  typography,
  ...overrides
})
