import { InputErrorProps } from "../../types/interfaces"

export default function InputError({ message }: InputErrorProps) {
  return <span className="text-red-500 text-sm">{message}</span>
}
