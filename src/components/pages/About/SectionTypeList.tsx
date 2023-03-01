import { FC } from 'react'

import { CupIcon } from 'components'

import styles from 'styles/pages/about.module.scss'

const SECTION_TYPES = ['MOOD', 'FLAVOR', 'MENU']

const SectionTypeList: FC = () => (
  <div className={styles.sectionTypes}>
    {SECTION_TYPES.map((type: string, idx: number) => (
      <div
        className={styles.sectionType}
        key={idx}
      >
        <CupIcon
          width={200}
          height={200}
        />

        <p className={styles.typeName}>{type}</p>
      </div>
    ))}
  </div>
)

export default SectionTypeList
