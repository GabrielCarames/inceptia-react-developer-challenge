import { useEffect, useState } from "react"
import { useDebounce } from "@uidotdev/usehooks"
import {
  handleSearchProps,
  InboundCase,
  useSearchProps
} from "@/types/interfaces"

const useSearch = ({ currentPage, clearCurrentPage }: useSearchProps) => {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    if (search === "") return
    clearCurrentPage()
  }, [currentPage])

  const handleSearch = ({
    searchBy,
    cases,
    setCases,
    setMaxPage
  }: handleSearchProps) => {
    const splitedSearchBy = searchBy.split(" ")
    let value
    const casesBySearchType = cases.filter((_case: InboundCase) => {
      if (splitedSearchBy.length > 1) {
        const firstValue = _case?.[splitedSearchBy[0] as keyof InboundCase]
        value = firstValue?.[splitedSearchBy[1] as keyof typeof firstValue]
      } else {
        value = _case?.[searchBy as keyof InboundCase]
      }
      return (
        value !== undefined &&
        value !== null &&
        value.toString().includes(search)
      )
    })
    setCases(casesBySearchType)
    setMaxPage(1)
  }

  return { search, debouncedSearch, setSearch, handleSearch }
}

export default useSearch
