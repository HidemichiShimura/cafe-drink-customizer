import { NavContent } from '../../index'
import styles from 'styles/common/Header/BurgerNavMenu.module.scss'

const BurgerNavMenu = () => (
  <ul className={styles['burger-nav-menu-container']}>
    <NavContent />
  </ul>
)

export default BurgerNavMenu
