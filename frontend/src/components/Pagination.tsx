import { PaginationProps } from "@/types/interfaces"

const Pagination = ({
  currentPage,
  totalPages,
  handlePrevClick,
  handleNextClick,
  jumpToPage
}: PaginationProps) => {
  return (
    <section>
      <div
        className="mx-auto max-w-7xl items-center px-8 md:px-12 lg:px-16"
        id="pagination"
      >
        <div className="flex w-full flex-wrap items-center justify-center gap-y-5 text-center lg:p-10">
          <div className="isolate inline-flex justify-center gap-5 rounded-xl shadow-sm">
            <button
              type="button"
              className="text-gray-700 border-gray-300 bg-white hover:bg-blue-1 group focus:ring-blue-500 relative inline-flex items-center rounded-lg border bg-gray-2 px-4 py-2 text-sm font-medium hover:bg-gray focus:z-10 focus:border-secondary focus:outline-none focus:ring-0"
              onClick={handlePrevClick}
            >
              <span className="icon-[ic--baseline-chevron-left] size-8" />
            </button>
            <div className="text-gray-700 bg-white border-gray-300 hover:bg-gray-50 focus:ring-blue-500 relative -ml-px inline-flex items-center rounded-lg border bg-gray-2 px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-0">
              <span className="space-x-2">
                <span>{currentPage}</span>
                <span>/</span>
                <span>{totalPages <= 1 ? 1 : totalPages}</span>
              </span>
            </div>
            <button
              type="button"
              className="text-gray-700 border-gray-300 bg-white hover:bg-blue-1 group focus:ring-blue-500 relative -ml-px inline-flex items-center rounded-lg border bg-gray-2 px-4 py-2 text-sm font-medium hover:bg-gray focus:z-10 focus:border-secondary focus:outline-none focus:ring-0"
              onClick={handleNextClick}
            >
              <span className="icon-[ic--baseline-chevron-right] size-8" />
            </button>
          </div>
          <form
            className="ml-5 flex items-center gap-2 text-sm md:text-base"
            onSubmit={jumpToPage}
          >
            <span>Ir a la página</span>
            <input
              className="border-gray-300 h-10 w-12 rounded-md border bg-gray-2 px-2 focus:border-blue-1 focus:outline-none focus:ring-0"
              type="number"
              name="jumptopage"
              max={totalPages <= 1 ? 1 : totalPages}
              min={1}
            />
            <button
              className="border-gray-300 rounded-md border bg-blue-1 text-white p-2 px-4 duration-200 hover:bg-blue-2"
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
