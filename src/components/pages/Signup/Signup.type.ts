import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

export interface SignUpType {
  email: string
  password: string
  confirmationPassword: string
}

export interface SignUpProps {
  handleSubmit: UseFormHandleSubmit<SignUpType>
  onSubmit: SubmitHandler<SignUpType>
  register: UseFormRegister<SignUpType>
  errors: FieldErrors<SignUpType>
  isProcessingSignup: boolean
}
