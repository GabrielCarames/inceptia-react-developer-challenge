import { handleSignOut } from "@/slices/authSlice"
import { RootState } from "@/store"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const useSignOut = () => {
  const userEmail = useSelector((state: RootState) => state.auth.user.email)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(handleSignOut())
    navigate("/iniciar-sesion")
  }

  return { signOut, userEmail }
}

export default useSignOut
