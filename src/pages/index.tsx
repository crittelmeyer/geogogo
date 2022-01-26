import { makeStyles } from 'utils'

import { Main } from 'components/layout'
import { PixelWorldMap } from 'components/base'

const useStyles = makeStyles({
  name: 'PixelWorldMap'
})((theme) => ({
  root: {
    border: 'solid red 1px',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  map: {
    marginTop: theme.spacing(10)
  }
}))

const Index = () => {
  const { classes } = useStyles()

  return (
    <Main className={classes.root}>
      <PixelWorldMap animationPattern="diagonal" />
      <div>{'test'}</div>
    </Main>
  )
}

export default Index
