import Image from 'next/image'
import { FC } from 'react'


import { IconProps, IconContainerProps } from './common.type'

const MoodIcon: FC<IconProps> = ({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
)

const MoodIconContainer: FC<Omit<IconContainerProps, 'food'>> = ({
  mood = '',
  width = 100,
  height = 100,
}) => {
  const src: string = `/icons/${mood}.png`
  const alt: string = `${mood} icon`

  return (
    <MoodIcon
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export default MoodIconContainer
