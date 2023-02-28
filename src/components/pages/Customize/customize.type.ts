export interface CustomizeUpperProps {
  iconName: string
  title: string
  optionNames: string[]
}

export interface CustomizeLowerProps {
  description: string
}

export type CustomizeMainProps = CustomizeUpperProps & CustomizeLowerProps
