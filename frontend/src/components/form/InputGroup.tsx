import { InputGroupProps } from "../../types/interfaces"
import Input from "./Input"

export default function InputGroup({
  containerClassName,
  label,
  inputProps,
  inputClassName,
  htmlFor,
  children,
  id,
  required
}: InputGroupProps) {
  return (
    <div
      className={`flex flex-col gap-1${
        containerClassName ? containerClassName : ""
      }`}
    >
      <label htmlFor={htmlFor}>{label}</label>
      <Input
        props={inputProps}
        className={inputClassName}
        id={id}
        required={required}
      />
      {children}
    </div>
  )
}
