import ThemeButton from "./ThemeButton"

export default function Header() {
  return (
    <header className="flex justify-end p-4 h-24 w-full items-center gap-10">
      Cerrar sesión
      <ThemeButton />
    </header>
  )
}
