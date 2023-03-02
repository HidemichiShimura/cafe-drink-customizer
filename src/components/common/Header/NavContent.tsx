import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { auth } from 'fb/configFirestore'
import { useFBUser } from 'fb/hooks/useFBUser'
import styles from 'styles/common/Header/NavContent.module.scss'

interface NavContentProps {
  onSignOut: () => void
  isLoggedIn: boolean
}

// This would be Union in the future ('About' | 'Foo' | 'Smaple')[]
type NAV_ITEMS_TYPE = 'About'[]

const NAV_ITEMS: NAV_ITEMS_TYPE = ['About']

const NavContent: FC<NavContentProps> = ({ onSignOut, isLoggedIn }) => {
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
      <button
        className={styles['nav-content-sign-out-button']}
        onClick={onSignOut}
      >
        {isLoggedIn ? 'Sign out' : 'Sign in'}
      </button>
    </>
  )
}

const NavContentContainer: FC = () => {
  const router = useRouter()
  const { isLoggedIn } = useFBUser()

  // prefetfch next route path
  useEffect(() => {
    router.prefetch('/login')
  }, [router])

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => router.push('/login'))
      .catch((error) => alert(error.message))
  }

  const handleClick = () =>
    isLoggedIn ? handleSignOut() : router.push('/login')

  return (
    <NavContent
      onSignOut={handleClick}
      isLoggedIn={isLoggedIn}
    />
  )
}

export default NavContentContainer
