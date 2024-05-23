import { DateInputProps } from "@/types/interfaces"
import Input from "./form/Input"

export default function DateInput({
  name,
  id,
  max,
  onChange,
  value
}: DateInputProps) {
  return (
    <Input
      props={{
        type: "date",
        name: name,
        id: id,
        max: max(),
        value: value,
        onChange: e => onChange(e.target.value),
        className:
          "w-full sm:w-max h-full rounded-lg bg-white dark:bg-tuna hover:text-white dark:text-white text-black border border-persian-green p-2 cursor-pointer hover:bg-persian-green duration-300"
      }}
    />
  )
}
