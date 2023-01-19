import { CupIcon } from '@/components'

import styles from '@/styles/pages/about.module.scss'

const SECTION_TYPES = ['MOOD', 'FLAVOR', 'MENU']

const SectionTypeList = () => (
  <div className={styles.sectionTypes}>
    {SECTION_TYPES.map((type, idx) => (
      <div
        className={styles.sectionType}
        key={idx}
      >
        <CupIcon />
        <p>{type}</p>
      </div>
    ))}
  </div>
)

export default SectionTypeList
