import Image from 'next/image'
import { FC } from 'react'

import { IconProps, IconContainerProps } from './common.type'

const CupIcon: FC<IconProps> = ({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
)

const CupIconContainer: FC<Omit<IconContainerProps, 'mood'>> = ({
  food = '',
  width = 100,
  height = 100,
}) => {
  const src: string = food === '' ? '/icons/cup.png' : `/icons/cup-${food}.png`
  const alt: string = food === '' ? 'cup icon' : `${food} cup icon`

  return (
    <CupIcon
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export default CupIconContainer
