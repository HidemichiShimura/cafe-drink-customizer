import { NavContent } from '../../index'
import styles from '@/styles/common/Header/NavMenu.module.scss'

const NavMenu = () => {
  return (
    <ul className={styles['nav-menu-container']}>
      <NavContent />
    </ul>
  )
}

export default NavMenu
