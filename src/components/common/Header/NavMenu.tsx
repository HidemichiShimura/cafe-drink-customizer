import { NavContent } from '../../index'
// @ts-expect-error TS(2307): Cannot find module 'styles/common/Header/NavMenu.m... Remove this comment to see the full error message
import styles from 'styles/common/Header/NavMenu.module.scss'

const NavMenu = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <ul className={styles['nav-menu-container']}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <NavContent />
  </ul>
)

export default NavMenu
