import { FC } from 'react'
import { NavContent } from '../../index'
import styles from 'styles/common/Header/NavMenu.module.scss'

// TODO FIX: this component can be removed and ul can be placed in NavContent
const NavMenu: FC = () => (
  <ul className={styles['nav-menu-container']}>
    <NavContent />
  </ul>
)

export default NavMenu
