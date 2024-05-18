import { InputProps } from "../../types/interfaces"

export default function Input({ required, id, props, className }: InputProps) {
  return (
    <input {...props} className={className} id={id} required={required}></input>
  )
}
