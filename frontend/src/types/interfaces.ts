export interface InputErrorProps {
  message: string
}

export interface InputGroupProps {
  containerClassName?: string
  label: string
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
  htmlFor: string
  children?: React.ReactNode
}

export interface InputProps {
  props: React.InputHTMLAttributes<HTMLInputElement>
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
  groups: { id: number; name: string }[]
  is_active: boolean
}

export interface LoginResponseProps {
  token: string
  email: string
}

export interface LayoutProps {
  children: React.ReactNode
}

export interface ClientProps {
  id: number
  name: string
  users: UserProps[]
}
