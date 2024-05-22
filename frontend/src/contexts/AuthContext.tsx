import { createContext, useState } from "react"

interface AuthContextProps {
  currentUser: string | null
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  setCurrentUser: (user: string | null) => void
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  isLoading: false,
  setIsLoading: () => {},
  setCurrentUser: () => {}
})

const defaultUser = () => {
  const userEmail = localStorage.getItem("user_email")
  return userEmail ? userEmail : null
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState(defaultUser)
  const [isLoading, setIsLoading] = useState(false)

  const authValues = {
    currentUser: currentUser,
    setCurrentUser,
    isLoading: isLoading,
    setIsLoading
  }

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
