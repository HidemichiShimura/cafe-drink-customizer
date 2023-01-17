import styles from '../../../styles/common/Header/NavContent.module.scss'

const NAV_ITEMS = ['XXXXX', 'XXXXX', 'XXXXX']
const NavContent = () => {
  return NAV_ITEMS.map((item, idx) => (
    <li className={styles['nav-content']} key={idx}>
      <a className={styles['nav-content-link']} href={`#${item}`}>
        {item}
      </a>
    </li>
  ))
}
export default NavContent
