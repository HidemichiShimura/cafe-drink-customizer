// @ts-expect-error TS(2307): Cannot find module 'styles/common/Footer/Footer.mo... Remove this comment to see the full error message
import styles from 'styles/common/Footer/Footer.module.scss'

const Footer = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={styles['footer-container']}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <p className={styles['footer-content']}>
      &copy; 2023 Cafe Drink Customizer
    </p>
  </div>
)

export default Footer
