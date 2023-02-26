import Link from 'next/link'

import { PageLayout, CupIcon } from 'components'

import styles from 'styles/pages/home.module.scss'

const HomePage = () => (
  <PageLayout>
    <Link href='/drink/select'>
      <CupIcon
        width={250}
        height={250}
      />

      <p className={styles.selectionName}>Mood</p>
    </Link>
  </PageLayout>
)

export default HomePage
