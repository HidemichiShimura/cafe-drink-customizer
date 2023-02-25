import React from 'react'
import { Header, Banner, Footer } from '../../index'

// @ts-expect-error TS(2307): Cannot find module 'styles/common/pageLayout/pageL... Remove this comment to see the full error message
import styles from 'styles/common/pageLayout/pageLayout.module.scss'

const PageLayout = ({
  children
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Header />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Banner />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={styles.pageLayoutContent}>{children}</div>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Footer />
  </div>
)

export default PageLayout
