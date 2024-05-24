import { useForm } from "@/hooks/useForm"
import { useNavigate } from "react-router-dom"
import { FormDataProps } from "@/types/interfaces"
import { handleSignIn } from "@/slices/authSlice"
import { useDispatch } from "react-redux"

const useSignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<any>()

  const handleSignInSubmit = async ({ data }: FormDataProps) => {
    const resultAction = await dispatch(handleSignIn({ data }))
    if (handleSignIn.fulfilled.match(resultAction)) {
      navigate("/admin")
    }
  }

  const { handleSubmit, inputErrors } = useForm({
    onSubmit: handleSignInSubmit
  })

  return { handleSubmit, inputErrors }
}

export default useSignIn
