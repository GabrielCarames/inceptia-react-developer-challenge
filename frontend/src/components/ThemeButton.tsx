import useThemeSwitcher from "../hooks/useThemeSwitcher"

export default function ThemeButton() {
  const { handleChangeTheme, theme } = useThemeSwitcher()

  return (
    <button
      className="  rounded-full bg-gray-200 dark:bg-tuna h-min flex justify-center items-center p-4"
      onClick={handleChangeTheme}
    >
      {theme === "dark" ? (
        <span className="icon-[ic--sharp-wb-sunny] bg-persian-green size-5" />
      ) : (
        <span className="icon-[ic--baseline-bedtime] bg-persian-green size-5" />
      )}
    </button>
  )
}
