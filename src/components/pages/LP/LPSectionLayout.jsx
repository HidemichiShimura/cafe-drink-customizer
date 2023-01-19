import styles from '@/styles/pages/lp.module.scss'

const LPSectionLayout = ({ title = '', description, children }) => (
  <section className={styles.sectionLayout}>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
    <div>{children}</div>
  </section>
)

export default LPSectionLayout
