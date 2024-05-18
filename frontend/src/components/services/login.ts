import { FormDataProps, LoginResponseProps } from "@/types/interfaces"
import handleRequest from "@/utils/handleRequest"

const handleSignIn = ({ userData }: { userData: LoginResponseProps }) => {
  const { access_token, payload } = userData
  localStorage.setItem("access_token", access_token)
  localStorage.setItem("user_email", payload?.email)
}

export const signIn = async ({ data }: FormDataProps) => {
  const res = await handleRequest({
    method: "post",
    url: `${import.meta.env.VITE_API_BASE_URL}/auth/custom`,
    body: data,
    errorMessage:
      "Ha ocurrido un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde."
  })
  if (!res?.error) {
    handleSignIn({ userData: res?.data?.body })
  }
  return res
}
