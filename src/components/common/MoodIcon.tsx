import Image from 'next/image'

interface MoodIconProps {
  src: string
  alt: string
  width: number
  height: number
}

interface MoodIconContainerProps {
  mood?: string
  width?: number
  height?: number
}

const MoodIcon = ({ src, alt, width, height }: MoodIconProps) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
)

const MoodIconContainer = ({
  mood = '',
  width = 100,
  height = 100,
}: MoodIconContainerProps) => {
  const src = `/icons/${mood}.png`
  const alt = `${mood} icon`

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
