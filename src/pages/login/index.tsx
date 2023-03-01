import Link from 'next/link'
import { FC } from 'react'
import {
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form'
import { useLogin } from './hooks/useLogin'

export interface LoginType {
  email: string
  password: string
}

interface LoginProps {
  register: UseFormRegister<LoginType>
  handleSubmit: UseFormHandleSubmit<LoginType>
  onSubmit: (data: LoginType) => Promise<void>
  isLoading: boolean
  errors: FieldErrors<LoginType>
  error: string
}

const Login: FC<LoginProps> = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isLoading,
  error,
}) => {
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

const LoginContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>()

  const { isLoading, error, onSubmit } = useLogin()

  return (
    <Login
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isLoading={isLoading}
      errors={errors}
      error={error}
    />
  )
}

export default LoginContainer
