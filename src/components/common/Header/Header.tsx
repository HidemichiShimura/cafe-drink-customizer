import React, { useState } from 'react'
import { HeaderLogo, NavMenu, BurgerNavMenu } from '../../index'
import styles from 'styles/common/Header/Header.module.scss'

const Header = ({ burgerClass, menuClass, updateMenu }: any) => (
  <>
    <div className={styles['nav-bar']}>
      <HeaderLogo />

      <div
        className={styles['burger-menu']}
        onClick={updateMenu}
      >
        <div className={styles[burgerClass]}></div>

        <div className={styles[burgerClass]}></div>

        <div className={styles[burgerClass]}></div>
      </div>

      <nav className={styles[menuClass]}>
        <BurgerNavMenu />
      </nav>

      <nav className={styles['nav-menu']}>
        <NavMenu />
      </nav>
    </div>
  </>
)

const HeaderContainer = () => {
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
    <Header
      burgerClass={burger_class}
      menuClass={menu_class}
      updateMenu={updateMenu}
    />
  )
}

export default HeaderContainer
