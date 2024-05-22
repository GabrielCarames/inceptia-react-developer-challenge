import { PaginationProps } from "@/types/interfaces"

const Pagination = ({
  currentPage,
  totalPages,
  handlePrevClick,
  handleNextClick,
  jumpToPage
}: PaginationProps) => {
  return (
    <section className="mt-5">
      <div
        className="mx-auto max-w-7xl items-center px-8 md:px-12 lg:px-16"
        id="pagination"
      >
        <div className="flex w-full flex-wrap items-center justify-center gap-y-5 text-center">
          <div className="isolate inline-flex justify-center gap-5 rounded-xl shadow-sm">
            <button
              type="button"
              className="text-gray-700 border-gray-300 hover:border-persian-green dark:border-tuna dark:bg-tuna bg-white group focus:ring-blue-500 relative inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium focus:z-10focus:outline-none focus:ring-0"
              onClick={handlePrevClick}
            >
              <span className="icon-[ic--baseline-chevron-left] size-8 dark:bg-white bg-persian-green" />
            </button>
            <div className="text-gray-700 bg-white dark:bg-tuna dark:text-white dark:border-tuna border-gray-300 focus:ring-blue-500 relative -ml-px inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-0">
              <span className="space-x-2">
                <span>{currentPage}</span>
                <span>/</span>
                <span>{totalPages <= 1 ? 1 : totalPages}</span>
              </span>
            </div>
            <button
              type="button"
              className="text-gray-700 border-gray-300 hover:border-persian-green dark:border-tuna dark:bg-tuna bg-white group focus:ring-blue-500 relative -ml-px inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-0"
              onClick={handleNextClick}
            >
              <span className="icon-[ic--baseline-chevron-right] size-8 dark:bg-white bg-persian-green" />
            </button>
          </div>
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
              className="border border-persian-green bg-white text-black hover:text-white rounded-md dark:bg-tuna dark:text-white p-2 px-4 h-[50px] duration-200 hover:bg-persian-green"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Pagination
