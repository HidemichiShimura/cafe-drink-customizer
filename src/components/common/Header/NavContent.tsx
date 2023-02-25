import Link from 'next/link'
// @ts-expect-error TS(2307): Cannot find module 'styles/common/Header/NavConten... Remove this comment to see the full error message
import styles from 'styles/common/Header/NavContent.module.scss'

const NAV_ITEMS = ['About']
const NavContent = () =>
  NAV_ITEMS.map((item, idx) => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <li
      className={styles['nav-content']}
      key={idx}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Link
        className={styles['nav-content-link']}
        href={`/${item.toLowerCase()}`}
      >
        {item}
      </Link>
    </li>
  ))

export default NavContent
