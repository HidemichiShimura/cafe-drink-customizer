// @ts-expect-error TS(2307): Cannot find module 'components' or its correspondi... Remove this comment to see the full error message
import { CupIcon } from 'components'

// @ts-expect-error TS(2307): Cannot find module 'styles/pages/about.module.scss... Remove this comment to see the full error message
import styles from 'styles/pages/about.module.scss'

const SECTION_TYPES = ['MOOD', 'FLAVOR', 'MENU']

const SectionTypeList = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={styles.sectionTypes}>
    {SECTION_TYPES.map((type, idx) => (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div
        className={styles.sectionType}
        key={idx}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CupIcon
          width={200}
          height={200}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p className={styles.typeName}>{type}</p>
      </div>
    ))}
  </div>
)

export default SectionTypeList
