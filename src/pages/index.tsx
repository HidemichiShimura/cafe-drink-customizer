import Link from 'next/link'

// @ts-expect-error TS(2307): Cannot find module 'components' or its correspondi... Remove this comment to see the full error message
import { PageLayout, CupIcon } from 'components'

// @ts-expect-error TS(2307): Cannot find module 'styles/pages/home.module.scss'... Remove this comment to see the full error message
import styles from 'styles/pages/home.module.scss'

const HomePage = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <PageLayout>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link href='/drink/select'>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CupIcon
        width={250}
        height={250}
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p className={styles.selectionName}>Mood</p>
    </Link>
  </PageLayout>
)

export default HomePage
