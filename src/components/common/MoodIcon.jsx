import Image from 'next/image'

const MoodIcon = ({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
)

const MoodIconContainer = ({ mood, width, height }) => {
  const src = `/icons/${mood}.png`
  const alt = `${mood} icon`

  return (
    <MoodIcon
      src={src}
      alt={alt}
      width={width || 100}
      height={height || 100}
    />
  )
}

export default MoodIconContainer
