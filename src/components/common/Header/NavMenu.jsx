import styles from '../../../styles/common/Header/NavMenu.module.scss'
import { NavContent } from '../../index'

const NavMenu = () => {
  return (
    <nav className={styles['nav-menu-container']}>
      <ul className={styles['nav-menu']}>
        <NavContent />
      </ul>
    </nav>
  )
}

export default NavMenu
