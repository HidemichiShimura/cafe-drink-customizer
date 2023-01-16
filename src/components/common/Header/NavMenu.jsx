import styles from '../../../styles/common/Header/HeaderLogo.module.scss'

const NavMenu = () => {
  return (
    <nav className={styles['nav-menu-container']}>
      <ul className={styles['nav-menu']}>
        <li>
          <a href='#intro'>INTRO</a>
        </li>
        <li>
          <a href='#about'>ABOUT</a>
        </li>
        <li>
          <a href='#projects'>PROJECTS</a>
        </li>
        <li>
          <a href='#contact'>CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
