import styles from '../../../styles/common/Header/Header.module.scss'
import { HeaderLogo, NavMenu } from '../../index'

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['container']}>
        <HeaderLogo />
        <NavMenu />
      </div>
    </header>
  )
}

export default Header
