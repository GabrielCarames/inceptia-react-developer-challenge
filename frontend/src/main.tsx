import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import NotFound from "./pages/NotFound.tsx"
import SignIn from "./pages/SignIn.tsx"
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster
      toastOptions={{
        duration: 4000
      }}
    />
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
