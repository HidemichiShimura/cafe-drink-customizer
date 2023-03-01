import { FC, ReactNode } from 'react'

import styles from 'styles/pages/about.module.scss'

interface AboutSectionLayoutProps {
  title?: string
  description?: string
  children: ReactNode
}

const AboutSectionLayout: FC<AboutSectionLayoutProps> = ({
  title = '',
  description,
  children,
}) => {
  return (
    <section className={styles.sectionLayout}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>

        {description && <p className={styles.description}>{description}</p>}
      </div>

      <div className={styles.sectionChildren}>{children}</div>
    </section>
  )
}

export default AboutSectionLayout
