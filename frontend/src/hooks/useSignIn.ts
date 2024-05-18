import { useForm } from "@/hooks/useForm"
import { useNavigate } from "react-router-dom"
import { FormDataProps } from "@/types/interfaces"
import { signIn } from "@/components/services/login"

const useSignIn = () => {
  const navigate = useNavigate()

  const handleSignIn = async ({ data }: FormDataProps) => {
    const res = await signIn({ data })
    if (!res?.error) {
      // console.log(res?.data)
      // TODO: save user data in redux
      navigate("/admin")
    }
  }
  const { handleSubmit, inputErrors } = useForm({ onSubmit: handleSignIn })

  return { handleSubmit, inputErrors }
}

export default useSignIn
