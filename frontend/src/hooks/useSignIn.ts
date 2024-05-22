import { useForm } from "@/hooks/useForm"
import { useNavigate } from "react-router-dom"
import { FormDataProps } from "@/types/interfaces"
import { signIn } from "@/components/services/login"
import { useContext } from "react"
import { AuthContext } from "@/contexts/AuthContext"

const useSignIn = () => {
  const navigate = useNavigate()
  const { setCurrentUser } = useContext(AuthContext)

  const handleSignIn = async ({ data }: FormDataProps) => {
    const res = await signIn({ data })
    if (!res?.error) {
      navigate("/admin")
      setCurrentUser(res?.data?.email)
    }
  }
  const { handleSubmit, inputErrors } = useForm({ onSubmit: handleSignIn })

  return { handleSubmit, inputErrors }
}

export default useSignIn
