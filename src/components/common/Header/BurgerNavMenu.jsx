import styles from '../../../styles/common/Header/BurgerNavMenu.module.scss'
import { NavContent } from '../../index'

const BurgerNavMenu = () => {
  return (
    <ul className={styles['burger-nav-menu-container']}>
      <NavContent />
    </ul>
  )
}

export default BurgerNavMenu
