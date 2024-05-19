import { Outlet } from "react-router-dom"
import Layout from "./components/Layout"

export default function App() {
  return (
    <div className="w-full h-full min-h-screen bg-ghost-white dark:bg-dark text-black dark:text-white">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  )
}
