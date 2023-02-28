import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { useState } from 'react'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export function useAuth() {
  return auth
}

export function useUser() {
  const [user, setUser] = useState<User>()
  onAuthStateChanged(auth, (user) => {
    if (user) setUser(user)
  })
  return user
}
