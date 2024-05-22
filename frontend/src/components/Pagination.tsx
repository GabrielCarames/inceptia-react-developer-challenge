import { PaginationProps } from "@/types/interfaces"
import PaginationButtons from "./PaginationButtons"
import GoToPage from "./GoToPage"

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
          <PaginationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
          <GoToPage totalPages={totalPages} jumpToPage={jumpToPage} />
        </div>
      </div>
    </section>
  )
}

export default Pagination
