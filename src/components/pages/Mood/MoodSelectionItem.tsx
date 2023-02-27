import { CupIcon, MoodIcon } from 'components'
import moodStyles from 'styles/pages/mood.module.scss'

interface MoodSelectionItemProps {
  id: string
  name: string
  handleItemClick: (id: string) => void
  iconName: string
  isMood?: boolean
  isSelected?: boolean
}

const MoodSelectionItem = ({
  id,
  name,
  handleItemClick,
  iconName,
  isMood = false,
  isSelected = false,
}: MoodSelectionItemProps) => (
  <div
    className={`${moodStyles.selectionItem} ${
      isSelected && moodStyles.selectionItem_active
    }`}
  >
    <button
      className={moodStyles.selectionItemButton}
      type='button'
      onClick={() => handleItemClick(id)}
    >
      {isMood ? (
        <MoodIcon
          mood={iconName.toLowerCase()}
          width={150}
          height={150}
        />
      ) : (
        <CupIcon
          food={iconName.toLowerCase()}
          width={150}
          height={150}
        />
      )}
    </button>

    <p>{name}</p>
  </div>
)

export { MoodSelectionItem }
