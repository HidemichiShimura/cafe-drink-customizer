import styles from '../../../styles/common/Header/Header.module.scss'
import { HeaderLogo, BurgerMenu, NavMenu } from '../../index'

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['container']}>
        <HeaderLogo />
        {/* <BurgerMenu /> */}
        <NavMenu />
      </div>
    </header>
  )
}

export default Header
