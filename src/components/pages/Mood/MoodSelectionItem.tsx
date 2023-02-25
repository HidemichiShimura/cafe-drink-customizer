// @ts-expect-error TS(2307): Cannot find module 'components' or its correspondi... Remove this comment to see the full error message
import { CupIcon, MoodIcon } from 'components'
// @ts-expect-error TS(2307): Cannot find module 'styles/pages/mood.module.scss'... Remove this comment to see the full error message
import moodStyles from 'styles/pages/mood.module.scss'

const MoodSelectionItem = ({
  id,
  name,
  handleItemClick,
  iconName,
  isMood = false,
  isSelected = false
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div
    className={`${moodStyles.selectionItem} ${
      isSelected && moodStyles.selectionItem_active
    }`}
  >
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <button
      className={moodStyles.selectionItemButton}
      type='button'
      onClick={() => handleItemClick(id)}
    >
      {isMood ? (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MoodIcon
          mood={iconName.toLowerCase()}
          width={150}
          height={150}
        />
      ) : (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CupIcon
          food={iconName.toLowerCase()}
          width={150}
          height={150}
        />
      )}
    </button>

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <p>{name}</p>
  </div>
)

export { MoodSelectionItem }
