import styles from '@/styles/pages/lp.module.scss'

const AboutSectionLayout = ({ title = '', description, children }) => {
  return (
    <section className={styles.sectionLayout}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      <div>{children}</div>
    </section>
  )
}

export default AboutSectionLayout
