import Link from 'next/link'
// @ts-expect-error TS(2307): Cannot find module 'styles/common/Button/Button.mo... Remove this comment to see the full error message
import styles from 'styles/common/Button/Button.module.scss'

const LinkButton = ({
  buttonContent,
  link
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={styles['button-container']}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link
      className={styles['button-link']}
      href={link}
    >
      {buttonContent}
    </Link>
  </div>
)

export default LinkButton
