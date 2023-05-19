import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useSignup } from 'hooks/useSignup'
import { SignUpProps, SignUpType } from './Signup.type'
import styles from 'styles/pages/loginsignup.module.scss'

const SignUp = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  isProcessingSignup,
}: SignUpProps) => {
  return (
    <div className={styles['container']}>
      <div className={styles['form-container']}>
        <h1 className={styles['title']}>Sign up your account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles['input-container']}>
            <label className={styles['input-title']}>E-mail</label>
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
            <label className={styles['input-title']}>Create password</label>
            {errors.password && (
              <p className={styles['error-sentence1']}>Please enter password</p>
            )}
            <input
              className={styles['input-box']}
              type='password'
              minLength={6}
              {...register('password', { required: true })}
            />
          </div>
          <div className={styles['input-container']}>
            <label className={styles['input-title']}>Confirm password</label>
            {errors.confirmationPassword && (
              <p className={styles['error-sentence1']}>
                Please enter confirmation password
              </p>
            )}
            <input
              className={styles['input-box']}
              type='password'
              minLength={6}
              {...register('confirmationPassword', { required: true })}
            />
          </div>
          <button
            className={styles['login-signup-button']}
            type='submit'
            disabled={isProcessingSignup}
          >
            {isProcessingSignup ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
        <Link
          className={styles['move-login-button']}
          href='/login'
        >
          Login page
        </Link>
        <Link
          className={styles['try-button']}
          href='/'
        >
          Just try
        </Link>
      </div>
    </div>
  )
}

const SignUpContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>()

  const { onSubmit, isProcessingSignup } = useSignup()

  return (
    <SignUp
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      isProcessingSignup={isProcessingSignup}
    />
  )
}

export default SignUpContainer
