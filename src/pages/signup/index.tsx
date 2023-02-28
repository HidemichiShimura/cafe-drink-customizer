import { createUserWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth, useUser } from '../../hooks/firebase'

interface SignUpType {
  email: string
  password: string
  confirmationPassword: string
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>()

  const auth = useAuth()
  const currentUser = useUser()
  const [isProcessingSignup, setIsProcessingSignup] = useState(false)
  const router = useRouter()
  const signup = async (email: string, password: string) => {
    try {
      setIsProcessingSignup(true)
      await createUserWithEmailAndPassword(auth, email, password)
      setIsProcessingSignup(false)
    } catch (e) {
      console.error(e)
    }
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

  useEffect(() => {
    if (currentUser) router.push('/')
  }, [currentUser, router])
  //const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <h1>Sign up your account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>E-mail</label>
          {errors.email && <p>Please enter e-mail</p>}
          <input
            type='email'
            {...register('email', { required: true })}
          />
        </div>
        <div>
          <label>Create password</label>
          {errors.password && <p>Please enter password</p>}
          <input
            type='password'
            minLength={6}
            {...register('password', { required: true })}
          />
        </div>
        <div>
          <label>Confirm password</label>
          {errors.confirmationPassword && (
            <p>Please enter confirmation password</p>
          )}
          <input
            type='password'
            minLength={6}
            {...register('confirmationPassword', { required: true })}
          />
        </div>
        <button type='submit'>Sign up</button>
      </form>
      <Link href='/login'>Login page</Link>
      <Link href='/'>Just try</Link>
    </>
  )
}

export default Signup
