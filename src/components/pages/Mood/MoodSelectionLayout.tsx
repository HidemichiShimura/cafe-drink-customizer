import { FC, ReactNode } from 'react'
import moodStyles from 'styles/pages/mood.module.scss'

interface MoodSelectionLayoutProps {
  children: ReactNode
  title: string
}

const MoodSelectionLayout: FC<MoodSelectionLayoutProps> = ({
  children,
  title,
}) => (
  <div className={moodStyles.selectionContainer}>
    <h3>{title}</h3>

    <div className={moodStyles.selectionItems}>{children}</div>
  </div>
)

export { MoodSelectionLayout }
