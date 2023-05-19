import {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form'

export interface LoginType {
  email: string
  password: string
}

export interface LoginProps {
  register: UseFormRegister<LoginType>
  handleSubmit: UseFormHandleSubmit<LoginType>
  onSubmit: (data: LoginType) => Promise<void>
  isLoading: boolean
  errors: FieldErrors<LoginType>
  error: string
}
