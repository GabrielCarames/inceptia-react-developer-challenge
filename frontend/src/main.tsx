import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import NotFound from "./pages/NotFound.tsx"
import SignIn from "./pages/SignIn.tsx"
import { Toaster } from "react-hot-toast"
import Client from "./pages/Client.tsx"
import TanStackProvider from "./components/TanStackProvider.tsx"
import PrivateRoute from "./components/PrivateRoute.tsx"
import AuthProvider from "./contexts/AuthContext.tsx"
import Home from "./pages/Home.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster
      toastOptions={{
        duration: 4000
      }}
    />
    <TanStackProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/admin" />} />
            <Route path="/admin" element={<Navigate to="/admin/inicio" />} />
            <Route path="/admin" element={<PrivateRoute Component={App} />}>
              <Route path="inicio" element={<Home />} />
              <Route path="cliente">
                <Route path=":id" element={<Client />} />
              </Route>
            </Route>
            <Route path="/iniciar-sesion" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TanStackProvider>
  </React.StrictMode>
)
