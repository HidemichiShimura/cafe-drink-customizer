import Link from 'next/link'

import { PageLayout, CupIcon } from '@/components'

import styles from '@/styles/pages/home.module.scss'

const HomePage = () => (
  <PageLayout>
    <div className={styles.container}>
      <Link href='/drink/select'>
        <CupIcon
          width={250}
          height={250}
        />
        <p className={styles.selectionName}>Mood</p>
      </Link>
    </div>
  </PageLayout>
)

export default HomePage
