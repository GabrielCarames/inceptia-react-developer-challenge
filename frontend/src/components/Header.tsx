import useSignOut from "@/hooks/useSignOut"
import ThemeButton from "./ThemeButton"

export default function Header() {
  const { signOut, currentUser } = useSignOut()

  return (
    <header className="flex justify-end p-4 h-20 w-full items-center gap-10 dark:bg-shark bg-white">
      {currentUser}
      <button
        onClick={signOut}
        className="border border-persian-green h-12 rounded-lg p-4 flex justify-center items-center hover:bg-persian-green text-black dark:text-white hover:text-white"
      >
        Cerrar sesión
      </button>
      <ThemeButton />
    </header>
  )
}
