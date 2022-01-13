import { createTheme } from '@mui/material'

const SPACING_FACTOR = 8
const BORDER_RADIUS = 8

const theme = createTheme({
  palette: {
    primary: {
      main: '#0000ff'
    },
    secondary: {
      main: '#00ff00'
    },
    text: {
      primary: '#0f0f0f',
      secondary: '#f0f0f0'
    },
    error: {
      main: '#0000ff'
    }
  },
  spacing: SPACING_FACTOR,
  shape: { borderRadius: BORDER_RADIUS }
})

export default theme
