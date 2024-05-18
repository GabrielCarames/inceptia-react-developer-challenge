import useThemeSwitcher from "../hooks/useThemeSwitcher"

export default function ThemeButton() {
  const { handleChangeTheme, theme } = useThemeSwitcher()

  return (
    <button
      className="size-12 rounded-full bg-gray-200 dark:bg-gray-800"
      onClick={handleChangeTheme}
    >
      {theme === "dark" ? "🌞" : "🌜"}
    </button>
  )
}
