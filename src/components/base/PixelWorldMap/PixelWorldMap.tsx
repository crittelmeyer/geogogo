import { keyframes } from 'tss-react'

import { isEmpty, makeStyles } from 'utils'

import type { AnimationPattern, PixelWorldMapProps } from './PixelWorldMap.d'

// prettier-ignore
const mapArray = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0],
  [1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

// prettier-ignore
const mapArrayWithBorder = [
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  ...mapArray.map(row => [2, ...row, 2]),
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]

const getShadowString = (
  arr: number[][],
  altColor: string,
  animationColor?: string,
  animationColorIndex?: number,
  animationPattern?: AnimationPattern
) =>
  arr
    .reduce((acc, row, rowIndex) => {
      let color = ''
      let altColorWithSpace = isEmpty(altColor) ? '' : ` ${altColor}`

      if (animationPattern === 'row' && animationColorIndex === rowIndex) {
        color = ` ${animationColor}`
      }

      return [
        ...acc,
        row
          .map((column, columnIndex) => {
            if (animationPattern === 'column') {
              if (animationColorIndex === columnIndex) {
                color = ` ${animationColor}`
              } else {
                color = ''
              }
            } else if (animationPattern === 'diagonal') {
              if (animationColorIndex === columnIndex + rowIndex) {
                color = ` ${animationColor}`
              } else {
                color = ''
              }
            }

            if (column === 1) {
              return `${columnIndex + 1}px ${rowIndex + 1}px${color}`
            } else if (column === 2) {
              return `${columnIndex + 1}px ${rowIndex + 1}px${altColorWithSpace}`
            } else {
              return ''
            }
          })
          .filter((item) => item !== '')
      ]
    }, [])
    .join(',')

const getKeyframes = (
  arr: number[][],
  altColor: string,
  animationColor: string,
  animationPattern: AnimationPattern,
  animationDuration: number = 0.3,
  animationDelayAfter: number = 3
) => {
  let frames = ['']
  const totalAnimationDuration = animationDuration + animationDelayAfter
  const maxPercent = 100 * (animationDuration / totalAnimationDuration)

  arr.forEach((row, rowIndex) => {
    if (animationPattern === 'row') {
      const percent = (maxPercent * (rowIndex + 1)) / arr.length

      frames.push(
        `${percent}% { box-shadow: ${getShadowString(arr, altColor, animationColor, rowIndex, animationPattern)} }`
      )
    } else if (animationPattern === 'column') {
      row.forEach((_, columnIndex) => {
        const percent = (maxPercent * (columnIndex + 1)) / row.length

        frames.push(
          `${percent}% { box-shadow: ${getShadowString(arr, altColor, animationColor, columnIndex, animationPattern)} }`
        )
      })
    } else if (animationPattern === 'diagonal') {
      const length = row.length + arr.length

      for (let index = 0; index < length; index++) {
        const percent = (maxPercent * (index + 1)) / length

        frames.push(
          `${percent}% { box-shadow: ${getShadowString(arr, altColor, animationColor, index, animationPattern)} }`
        )
      }
    }
  })

  return keyframes(frames.join(' ')) + ` ${totalAnimationDuration}s`
}

const useStyles = makeStyles<{
  animation: boolean
  animationColor: string
  animationPattern: AnimationPattern
  borderColor: string
  color: string
  scale: number
}>({
  name: 'PixelWorldMap'
})((theme, { animation, animationColor, animationPattern, borderColor, color, scale }) => {
  let animationStyles = {}

  if (animation) {
    animationStyles = {
      '&::after': {
        content: '""',
        position: 'absolute',
        background: 'transparent',
        height: 1,
        width: 1,
        color: 'transparent',
        boxShadow: getShadowString(mapArrayWithBorder, borderColor),
        animation: `${getKeyframes(
          mapArrayWithBorder,
          borderColor,
          animationColor,
          animationPattern
        )} ease-out 2s infinite`
      }
    }
  }

  return {
    map: {
      background: 'transparent',
      boxShadow: getShadowString(mapArrayWithBorder, borderColor),
      color,
      height: 1,
      transform: `scale(${scale})`,
      width: 1,

      ...animationStyles
    },

    spacer: {
      height: `${(mapArrayWithBorder.length + 1) * scale}px`,
      width: `${(mapArrayWithBorder[0].length + 1) * scale}px`
    }
  }
})

const PixelWorldMap = ({
  animation,
  animationColor,
  animationPattern,
  borderColor,
  children,
  color,
  scale
}: PixelWorldMapProps) => {
  const { classes } = useStyles({ animation, animationColor, animationPattern, borderColor, color, scale })

  return (
    <div>
      <div className={classes.map} />
      <div className={classes.spacer}>{children}</div>
    </div>
  )
}

PixelWorldMap.defaultProps = {
  animation: true,
  animationColor: 'grey',
  animationPattern: 'row',
  borderColor: '#dedede',
  color: 'black',
  scale: 8
}

export default PixelWorldMap
