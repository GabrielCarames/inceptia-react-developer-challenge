import { InboundCaseKeys, sortCasesByCaseTypeProps } from "@/types/interfaces"
import { useState } from "react"

const useSort = () => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [sortBy, setSortBy] = useState<InboundCaseKeys>("last_updated")

  const sortCasesByCaseType = ({
    sortBy,
    cases,
    handleSetCases
  }: sortCasesByCaseTypeProps) => {
    const sortedCases = [...cases].sort((a, b) => {
      const aValue = a[sortBy]
      const bValue = b[sortBy]
      if (aValue == null && bValue == null) return 0
      if (aValue == null) return sortDirection === "asc" ? 1 : -1
      if (bValue == null) return sortDirection === "asc" ? -1 : 1
      if (sortDirection === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })
    handleSetCases(sortedCases)
    setSortBy(sortBy)
    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
  }

  return { sortDirection, sortBy, sortCasesByCaseType }
}

export default useSort
