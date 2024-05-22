import { AuthContext } from "@/contexts/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const useSignOut = () => {
  const { setCurrentUser, currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const signOut = () => {
    localStorage.clear()
    setCurrentUser(null)
    navigate("/iniciar-sesion")
  }

  return { signOut, currentUser }
}

export default useSignOut
