import { FC } from 'react'
import Link from 'next/link'
import styles from 'styles/common/Header/NavContent.module.scss'

const NAV_ITEMS: string[] = ['About']
const NavContent: FC = () => (
  <>
    {NAV_ITEMS.map((item: string, idx: number) => (
      <li
        className={styles['nav-content']}
        key={idx}
      >
        <Link
          className={styles['nav-content-link']}
          href={`/${item.toLowerCase()}`}
        >
          {item}
        </Link>
      </li>
    ))}
  </>
)

export default NavContent
