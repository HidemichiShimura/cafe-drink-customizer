import Image from 'next/image'

const MoodIcon = ({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
)

const MoodIconContainer = ({ mood = '', width = 100, height = 100 }) => {
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
