import { createUserWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth, useUser } from '../../hooks/firebase'

interface SignUpType {
  email: string
  password: string
  confirmationPassword: string
}

interface SignUpContainerProps {}

interface SignUpProps {
  onSubmit: any
  register: any
  errors: any
  isProcessingSignup: boolean
}

const SignUp = ({
  onSubmit,
  register,
  errors,
  isProcessingSignup,
}: SignUpProps) => {
  return (
    <>
      <h1>Sign up your account</h1>
      <form onSubmit={onSubmit}>
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
        <button
          type='submit'
          disabled={isProcessingSignup}
        >
          {isProcessingSignup ? 'Signing up...' : 'Sign up'}
        </button>
      </form>
      <Link href='/login'>Login page</Link>
      <Link href='/'>Just try</Link>
    </>
  )
}

const SignUpContainer = ({}: SignUpContainerProps) => {
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

  if (currentUser) router.push('/')

  return (
    <SignUp
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      isProcessingSignup={isProcessingSignup}
    />
  )
}

export default SignUpContainer
