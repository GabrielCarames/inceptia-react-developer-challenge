export interface InputErrorProps {
  message: string
}

export interface InputGroupProps {
  containerClassName?: string
  label: string
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
  inputClassName?: string
  htmlFor: string
  children?: React.ReactNode
  id: string
  required?: boolean
}

export interface InputProps {
  required?: boolean
  id: string
  props: React.InputHTMLAttributes<HTMLInputElement>
  className?: string
}

export interface ButtonProps {
  className?: string
  children: React.ReactNode
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>
  type: "button" | "submit" | "reset"
}

export interface UseFormProps {
  onSubmit: ({ data }: FormDataProps) => void
}

export interface InputError {
  [inputName: string]: {
    message: string
  }
}

export interface FormDataProps {
  data: { [k: string]: FormDataEntryValue }
}

export interface HandleAxiosRequestsProps {
  method: "get" | "post" | "put" | "delete" | "patch"
  url: string
  body?: { [k: string]: FormDataEntryValue }
  headers?: { [k: string]: string }
  errorMessage?: string
  successMessage?: string
}

export interface UserProps {
  id: number
  email: string
  first_name: string
  last_name: string
  profile_image: string
}

export interface LoginResponseProps {
  access_token: string
  refresh_token: string
  payload: UserProps
}
