import { PaginationArrowProps } from "@/types/interfaces"

export default function PaginationArrow({
  handlePrevClick,
  orientation
}: PaginationArrowProps) {
  return (
    <button
      type="button"
      className="text-gray-700 border-gray-300 hover:border-persian-green dark:border-tuna dark:bg-tuna bg-white group focus:ring-blue-500 relative inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium focus:z-10focus:outline-none focus:ring-0"
      onClick={handlePrevClick}
    >
      <span
        className={`${
          orientation === "left"
            ? "icon-[ic--baseline-chevron-left]"
            : "icon-[ic--baseline-chevron-right]"
        } size-8 dark:bg-white bg-persian-green`}
      />
    </button>
  )
}
