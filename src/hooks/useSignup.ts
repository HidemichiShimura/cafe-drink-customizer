import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { SignUpType } from 'components/pages/Signup/Signup.type'
import { auth } from 'fb/configFirestore'
import { useFBUser } from 'fb/hooks/useFBUser'

export const useSignup = () => {
  const [isProcessingSignup, setIsProcessingSignup] = useState<boolean>(false)
  const router = useRouter()
  const { isLoggedIn } = useFBUser()

  useEffect(() => {
    if (isLoggedIn) router.push('/')

    // router will cause re-router.push if router is added in dependencies, so remove it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  const signup = async (email: string, password: string) => {
    setIsProcessingSignup(true)

    await createUserWithEmailAndPassword(auth, email, password).catch((e) =>
      console.error(e),
    )

    setIsProcessingSignup(false)
  }

  const onSubmit: SubmitHandler<SignUpType> = ({
    email,
    password,
    confirmationPassword,
  }) => {
    password === confirmationPassword
      ? signup(email, password)
      : alert('The password does not match')
  }
  return { onSubmit, isProcessingSignup }
}
