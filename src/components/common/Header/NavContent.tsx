import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { auth } from 'hooks/firebase'
import styles from 'styles/common/Header/NavContent.module.scss'

const NAV_ITEMS: string[] = ['About']
const NavContent: FC = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        router.push('/login')
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  return (
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
      <li
        className={styles['nav-content']}
        onClick={() => {
          if (auth.currentUser) {
            handleSignOut()
          } else {
            alert('Error: You are not logged in.')
          }
        }}
      >
        <Link
          className={styles['sign-out-button']}
          href={''}
        >
          Sign out
        </Link>
      </li>
    </>
  )
}

export default NavContent
