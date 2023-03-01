import Link from 'next/link'
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'
import { useSignup } from './hooks/useSignup'

export interface SignUpType {
  email: string
  password: string
  confirmationPassword: string
}

interface SignUpProps {
  handleSubmit: UseFormHandleSubmit<SignUpType>
  onSubmit: SubmitHandler<SignUpType>
  register: UseFormRegister<SignUpType>
  errors: FieldErrors<SignUpType>
  isProcessingSignup: boolean
}

const SignUp = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  isProcessingSignup,
}: SignUpProps) => {
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
