import ThemeButton from "./ThemeButton"

export default function Header() {
  return (
    <header className="flex justify-end p-4 h-20 w-full items-center gap-10 dark:bg-shark bg-white">
      Cerrar sesión
      <ThemeButton />
    </header>
  )
}
