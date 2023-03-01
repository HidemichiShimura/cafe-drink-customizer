import { signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth, useUser } from '../../hooks/firebase'

interface LoginType {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const auth = useAuth()

  const onSubmit = async (data: LoginType) => {
    setIsLoading(true)
    setError('')

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      setIsLoading(false)
      router.push('/')
    } catch (error) {
      setIsLoading(false)
      setError('Information is not correct')
    }
  }

  return (
    <div>
      <h1>Login to your account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type='email'
            {...register('email', { required: true })}
          />
          {errors.email && <p>Please enter e-mail</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            {...register('password', { required: true })}
          />
          {errors.password && <p>Please enter password</p>}
        </div>
        {error && <p>{error}</p>}
        <button
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
      <p>
        Do not have an account? <Link href='/signup'>Resister from here!</Link>
      </p>
    </div>
  )
}

export default Login
