import { CupIcon, MoodIcon } from '@/components'
import moodStyles from '@/styles/pages/mood.module.scss'

const MoodSelectionItem = ({
  id,
  name,
  handleItemClick,
  iconName,
  isMood = false,
  isSelected = false,
}) => (
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
          mood={iconName}
          width={150}
          height={150}
        />
      ) : (
        <CupIcon
          food={iconName}
          width={150}
          height={150}
        />
      )}
    </button>

    <p>{name}</p>
  </div>
)

export { MoodSelectionItem }