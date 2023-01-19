import Link from 'next/link'
import styles from '@/styles/common/Header/NavContent.module.scss'

// const NAV_ITEMS = ['About']
const NavContent = () => {
  // return NAV_ITEMS.map((item, idx) => (
  //   <li
  //     className={styles['nav-content']}
  //     key={idx}
  //   >
  //     <Link
  //       className={styles['nav-content-link']}
  //       href={item}
  //     >
  //       {item}
  //     </Link>
  //   </li>
  // ))

  return (
    <li className={styles['nav-content']}>
      <Link
        className={styles['nav-content-link']}
        href='/'
      >
        About
      </Link>
    </li>
  )
}
export default NavContent
