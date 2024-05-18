import { useState } from "react"
import { userSchema } from "../validations/UserSchema"
import { InputError, UseFormProps } from "@/types/interfaces"
import { ZodIssue } from "zod"

export const useForm = ({ onSubmit }: UseFormProps) => {
  const [inputErrors, setInputErrors] = useState<InputError>({})

  const getInputNameAndMessageFromIssues = (issues: ZodIssue[]) => {
    const transformedObject: InputError = {}
    issues.forEach(item => {
      const { path, message } = item
      const key = path[0]
      if (!transformedObject[key]) {
        transformedObject[key] = { message }
      } else {
        transformedObject[key].message = message
      }
    })
    return transformedObject
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const fields = Object.fromEntries(formData.entries())
    const result = userSchema.safeParse(fields)
    if (result.success === false) {
      const inputsAndMessages = getInputNameAndMessageFromIssues(
        result?.error?.issues
      )
      setInputErrors(inputsAndMessages)
    } else {
      setInputErrors({})
      onSubmit({ data: fields })
    }
  }

  return {
    handleSubmit,
    inputErrors
  }
}
