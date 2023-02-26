import React from 'react'
import { Header, Banner, Footer } from '../../index'

import styles from 'styles/common/pageLayout/pageLayout.module.scss'

const PageLayout = ({ children }: any) => (
  <div>
    <Header />

    <Banner />

    <div className={styles.pageLayoutContent}>{children}</div>

    <Footer />
  </div>
)

export default PageLayout
