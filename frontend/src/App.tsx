import { Outlet } from "react-router-dom"
import Layout from "./components/Layout"
import LinkedInButton from "./components/LinkedInButton"
import GithubButton from "./components/GithubButton"

export default function App() {
  return (
    <div className="w-full h-full min-h-screen bg-ghost-white dark:bg-dark text-black dark:text-white">
      <Layout>
        <Outlet />
        <main className="flex justify-center flex-col items-center gap-5 mt-4 w-full">
          <div className="flex items-center gap-5 justify-center w-full">
            <img
              src="/assets/images/inceptia-ai-logo.jpeg"
              alt="Logo de Inceptia AI"
              className="rounded-lg size-20"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-center">
              Gabriel Caramés - React Developer Challenge
            </h1>
          </div>
          <div className="flex items-center gap-5">
            <LinkedInButton />
            <GithubButton />
          </div>
        </main>
      </Layout>
    </div>
  )
}
