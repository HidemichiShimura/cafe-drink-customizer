import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { LoginType } from '../pages/login'
import { auth } from 'fb/configFirestore'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const onSubmit = async (data: LoginType) => {
    setIsLoading(true)
    setError('')

    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => router.push('/'))
      .catch(() => setError('Information is not correct'))

    setIsLoading(false)
  }

  return { isLoading, error, onSubmit }
}
