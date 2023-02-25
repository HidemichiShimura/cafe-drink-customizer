// @ts-expect-error TS(2307): Cannot find module 'styles/pages/about.module.scss... Remove this comment to see the full error message
import styles from 'styles/pages/about.module.scss'

const AboutSectionLayout = ({
  title = '',
  description,
  children
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <section className={styles.sectionLayout}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className={styles.titleContainer}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h2 className={styles.title}>{title}</h2>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {description && <p className={styles.description}>{description}</p>}
      </div>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className={styles.sectionChildren}>{children}</div>
    </section>
  )
}

export default AboutSectionLayout
