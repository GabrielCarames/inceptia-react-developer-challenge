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
