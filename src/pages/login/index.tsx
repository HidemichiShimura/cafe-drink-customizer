import { signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth, useUser } from '../../hooks/firebase'

interface LoginFormInputs {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const auth = useAuth()
  const currentUser = useUser()

  const onSubmit = async (data: LoginFormInputs) => {
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

  useEffect(() => {
    if (currentUser) router.push('/')
  }, [currentUser, router])

  return (
    <div>
      <h1>Login</h1>
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
