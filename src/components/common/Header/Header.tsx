import React, { FC, useState } from 'react'
import { HeaderLogo, NavMenu, BurgerNavMenu } from '../../index'
import styles from 'styles/common/Header/Header.module.scss'

interface HeaderProps {
  burgerClass: string
  menuClass: string
  updateMenu: () => void
}

const Header: FC<HeaderProps> = ({ burgerClass, menuClass, updateMenu }) => (
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
)

const HeaderContainer: FC = () => {
  const [burger_class, setBurgerClass] = useState<string>('burger-bar')
  const [menu_class, setMenuClass] = useState<string>('menu-hidden')
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false)
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
