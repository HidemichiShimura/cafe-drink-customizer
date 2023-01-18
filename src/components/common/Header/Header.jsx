import React, { useState } from 'react'
import styles from '../../../styles/common/Header/Header.module.scss'
import { HeaderLogo, NavMenu, BurgerNavMenu } from '../../index'

const Header = () => {
  const [burger_class, setBurgerClass] = useState('burger-bar')
  const [menu_class, setMenuClass] = useState('menu-hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar-clicked')
      setMenuClass('menu-visible')
    } else {
      setBurgerClass('burger-bar')
      setMenuClass('menu-hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div className={styles['header-container']}>
      <div className={styles['nav-bar']}>
        <HeaderLogo />
        <div className={styles['burger-menu']} onClick={updateMenu}>
          <div className={styles[burger_class]}></div>
          <div className={styles[burger_class]}></div>
          <div className={styles[burger_class]}></div>
        </div>

        <nav className={styles[menu_class]}>
          <BurgerNavMenu />
        </nav>
        <nav className={styles['nav-menu']}>
          <NavMenu />
        </nav>
      </div>
    </div>
  )
}

export default Header
