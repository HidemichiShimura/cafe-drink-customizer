import { NavContent } from '../../index'
// @ts-expect-error TS(2307): Cannot find module 'styles/common/Header/BurgerNav... Remove this comment to see the full error message
import styles from 'styles/common/Header/BurgerNavMenu.module.scss'

const BurgerNavMenu = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <ul className={styles['burger-nav-menu-container']}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <NavContent />
  </ul>
)

export default BurgerNavMenu
