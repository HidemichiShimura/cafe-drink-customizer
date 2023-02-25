import Image from 'next/image'
import Link from 'next/link'
// @ts-expect-error TS(2307): Cannot find module 'public/icons/header-logo.png' ... Remove this comment to see the full error message
import Logo from 'public/icons/header-logo.png'
// @ts-expect-error TS(2307): Cannot find module 'styles/common/Header/HeaderLog... Remove this comment to see the full error message
import styles from 'styles/common/Header/HeaderLogo.module.scss'

const HeaderLogo = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={styles['logo-container']}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link
      className={styles['logo-link']}
      href='/'
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Image
        className={styles['header-logo']}
        src={Logo}
        alt={'header-logo'}
      />
    </Link>
  </div>
)

export default HeaderLogo
