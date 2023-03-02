import { User, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useMemo, useState } from 'react'
import { auth } from 'fb/configFirestore'

export const useFBUser = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user)
    })
  }, [])

  const isLoggedIn = useMemo(() => !!user, [user])
  return { user, isLoggedIn }
}
