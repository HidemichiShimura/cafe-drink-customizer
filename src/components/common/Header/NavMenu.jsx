import styles from '../../../styles/common/Header/NavMenu.module.scss'
import { NavContent } from '../../index'

const NavMenu = () => {
  return (
    <ul className={styles['nav-menu-container']}>
      <NavContent />
    </ul>
  )
}

export default NavMenu
