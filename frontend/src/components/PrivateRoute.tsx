import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

const PrivateRoute = ({ Component }: { Component: () => JSX.Element }) => {
  const { currentUser, isLoading } = useContext(AuthContext)

  if (isLoading)
    return <span className="loading loading-dots loading-lg"></span>
  if (currentUser) return <Component />

  return <Navigate to="/iniciar-sesion" />
}

export default PrivateRoute
