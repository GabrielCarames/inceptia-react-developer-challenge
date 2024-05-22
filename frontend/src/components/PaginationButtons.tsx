import { PaginationButtonsProps } from "@/types/interfaces"
import PaginationArrow from "./PaginationArrow"

export default function PaginationButtons({
  currentPage,
  totalPages,
  handlePrevClick,
  handleNextClick
}: PaginationButtonsProps) {
  return (
    <div className="isolate inline-flex justify-center gap-5 rounded-xl">
      <PaginationArrow handlePrevClick={handlePrevClick} orientation="left" />
      <div className="text-gray-700 bg-white dark:bg-tuna dark:text-white dark:border-tuna border-gray-300 focus:ring-blue-500 relative -ml-px inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-0">
        <span className="space-x-2">
          <span>{currentPage}</span>
          <span>/</span>
          <span>{totalPages <= 1 ? 1 : totalPages}</span>
        </span>
      </div>
      <PaginationArrow handlePrevClick={handleNextClick} orientation="right" />
    </div>
  )
}
