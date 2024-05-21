import { FormDataProps, LoginResponseProps } from "@/types/interfaces"
import handleRequest from "@/utils/handleRequest"

const handleSignIn = ({ userData }: { userData: LoginResponseProps }) => {
  const { token, email } = userData
  sessionStorage.setItem("access_token", token)
  sessionStorage.setItem("user_email", email)
}

export const signIn = async ({ data }: FormDataProps) => {
  const res = await handleRequest({
    method: "post",
    url: `${import.meta.env.VITE_API_BASE_URL}/login/`,
    body: data,
    errorMessage: "Ha ocurrido un error al iniciar sesión"
  })
  if (!res?.error) {
    handleSignIn({ userData: res?.data })
  }
  return res
}
