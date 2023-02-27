import React, { FC, ReactNode } from 'react'

import { Header, Banner, Footer } from '../../index'

import styles from 'styles/common/pageLayout/pageLayout.module.scss'

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => (
  <div>
    <Header />

    <Banner />

    <div className={styles.pageLayoutContent}>{children}</div>

    <Footer />
  </div>
)

export default PageLayout
