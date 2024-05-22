import { GoToPageProps } from "@/types/interfaces"

export default function GoToPage({ totalPages, jumpToPage }: GoToPageProps) {
  return (
    <form
      className="ml-5 flex items-center gap-2 text-sm md:text-base"
      onSubmit={jumpToPage}
    >
      <span>Ir a la página</span>
      <input
        className="border-gray-300 dark:border-tuna dark:bg-tuna dark:text-white h-[50px] w-16 rounded-md border bg-gray-2 px-2 focus:border-blue-1 focus:outline-none focus:ring-0 text-black"
        type="number"
        name="jumptopage"
        max={totalPages <= 1 ? 1 : totalPages}
        min={1}
      />
      <button
        className="bg-persian-green text-white hover:bg-monte-carlo hover:text-white rounded-md dark:text-white p-2 px-4 h-[50px] duration-200"
        type="submit"
      >
        Buscar
      </button>
    </form>
  )
}
