import { CupIcon } from '@/components'
import moodStyles from '@/styles/pages/mood.module.scss'

const MoodSelectionItem = ({ id, name, handleItemClick, iconName, isSelected = false }) => (
  <div className={moodStyles.selectionItem}>
    <button
      className={`${moodStyles.selectionItemButton} ${
        isSelected && moodStyles.selectionItemButton_active
      }`}
      type='button'
      onClick={() => handleItemClick(id)}
    >
      <CupIcon food={iconName} />
    </button>

    <p>{name}</p>
  </div>
)

export { MoodSelectionItem }
