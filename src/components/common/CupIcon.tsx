import Image from 'next/image'

const CupIcon = ({ src, alt, width, height }: any) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
)

const CupIconContainer = ({ food = '', width = 100, height = 100 }) => {
  const src = food === '' ? '/icons/cup.png' : `/icons/cup-${food}.png`
  const alt = food === '' ? 'cup icon' : `${food} cup icon`

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
