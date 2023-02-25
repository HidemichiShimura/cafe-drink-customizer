import React, { useState } from 'react'
import { HeaderLogo, NavMenu, BurgerNavMenu } from '../../index'
// @ts-expect-error TS(2307): Cannot find module 'styles/common/Header/Header.mo... Remove this comment to see the full error message
import styles from 'styles/common/Header/Header.module.scss'

const Header = ({
  burgerClass,
  menuClass,
  updateMenu
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={styles['nav-bar']}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <HeaderLogo />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div
        className={styles['burger-menu']}
        onClick={updateMenu}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={styles[burgerClass]}></div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={styles[burgerClass]}></div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={styles[burgerClass]}></div>
      </div>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <nav className={styles[menuClass]}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <BurgerNavMenu />
      </nav>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <nav className={styles['nav-menu']}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Header
      burgerClass={burger_class}
      menuClass={menu_class}
      updateMenu={updateMenu}
    />
  )
}

export default HeaderContainer
