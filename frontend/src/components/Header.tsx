import useSignOut from "@/hooks/useSignOut"
import ThemeButton from "./ThemeButton"
import { HeaderProps } from "@/types/interfaces"
import { Link } from "react-router-dom"

export default function Header({ openSidebar }: HeaderProps) {
  const { signOut, currentUser } = useSignOut()

  return (
    <header className="flex justify-between p-4 h-20 w-full items-center gap-10 dark:bg-shark bg-white">
      <div
        className={`${
          openSidebar ? "" : "ml-10"
        }  duration-0 text-sm sm:text-base`}
      >
        <Link to="/">
          <span className="font-bold">Inceptia</span> | React Developer
          Challenge
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <span className="hidden md:inline-block">{currentUser}</span>
        <button
          onClick={signOut}
          className="hidden md:flex border border-persian-green h-12 rounded-lg p-4 justify-center items-center hover:bg-persian-green text-black dark:text-white hover:text-white"
        >
          Cerrar sesión
        </button>
        <ThemeButton />
      </div>
    </header>
  )
}
