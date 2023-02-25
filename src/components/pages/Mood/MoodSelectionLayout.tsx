// @ts-expect-error TS(2307): Cannot find module 'styles/pages/mood.module.scss'... Remove this comment to see the full error message
import moodStyles from 'styles/pages/mood.module.scss'

const MoodSelectionLayout = ({
  children,
  title
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={moodStyles.selectionContainer}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <h3>{title}</h3>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={moodStyles.selectionItems}>{children}</div>
  </div>
)

export { MoodSelectionLayout }
