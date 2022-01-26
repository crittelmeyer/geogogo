export type AnimationPattern = 'row' | 'column' | 'diagonal'

export type PixelWorldMapProps = {
  animation?: boolean
  animationColor?: string
  animationPattern?: AnimationPattern
  borderColor?: string
  children?: JSX.Element
  color?: string
  scale?: number
}
