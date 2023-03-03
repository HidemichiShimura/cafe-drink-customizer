import Link from 'next/link'
import { FC } from 'react'
import {
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form'
import { useLogin } from './hooks/useLogin'
import styles from 'styles/pages/loginsignup.module.scss'

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
    <div className={styles['container']}>
      <div className={styles['form-container']}>
        <h1 className={styles['title']}>Login to your account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles['input-container']}>
            <label className={styles['input-title']}>Email</label>
            {errors.email && (
              <p className={styles['error-sentence1']}>Please enter e-mail</p>
            )}
            <input
              className={styles['input-box']}
              type='email'
              {...register('email', { required: true })}
            />
          </div>
          <div className={styles['input-container']}>
            <label className={styles['input-title']}>Password</label>
            {errors.password && (
              <p className={styles['error-sentence1']}>Please enter password</p>
            )}
            <input
              className={styles['input-box']}
              type='password'
              {...register('password', { required: true })}
            />
          </div>
          {error && <p className={styles['error-sentence2']}>{error}</p>}
          <button
            className={styles['login-signup-button']}
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <p className={styles['selection']}>
          Do not have an account?{' '}
          <Link
            className={styles['move-button']}
            href='/signup'
          >
            Resister from here!
          </Link>
        </p>
      </div>
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
