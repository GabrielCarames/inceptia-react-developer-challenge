import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "@/store"

const PrivateRoute = ({ Component }: { Component: () => JSX.Element }) => {
  const userEmail = useSelector((state: RootState) => state.auth.user.email)

  if (userEmail) {
    return <Component />
  }

  return <Navigate to="/iniciar-sesion" />
}

export default PrivateRoute
