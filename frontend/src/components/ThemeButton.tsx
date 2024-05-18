import useThemeSwitcher from "../hooks/useThemeSwitcher"

export default function ThemeButton() {
  const { handleChangeTheme, theme } = useThemeSwitcher()

  return (
    <button
      className="fixed right-4 top-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      onClick={handleChangeTheme}
    >
      {theme === "dark" ? "🌞" : "🌜"}
    </button>
  )
}
