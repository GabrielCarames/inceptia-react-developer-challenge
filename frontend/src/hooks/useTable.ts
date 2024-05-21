import { useState } from "react"
import { useEffect } from "react"
import { useDebounce } from "@uidotdev/usehooks"
import usePagination from "./usePagination"
import { useQuery } from "@tanstack/react-query"
import { getCases } from "@/components/services/cases"
import { InboundCase } from "@/types/interfaces"

const useTable = ({ id }: { id: string }) => {
  const [search, setSearch] = useState("")
  const [maxPage, setMaxPage] = useState(1)
  const [cases, setCases] = useState([])
  const [sortDirection, setSortDirection] = useState("asc")
  const [sortBy, setSortBy] = useState("asc")
  const [searchBy, setSearchBy] = useState("last_updated")
  const [gteDate, setGteDate] = useState("2021-03-01")
  const [lteDate, setLteDate] = useState("2022-03-25")
  const debouncedSearch = useDebounce(search, 500)

  const {
    currentPage,
    handlePrevClick,
    handleNextClick,
    jumpToPage,
    clearCurrentPage
  } = usePagination(maxPage)

  const { data: casesBySearch } = useQuery({
    queryKey: ["casesBySearch", currentPage, gteDate, lteDate],
    queryFn: () =>
      getCases({
        client: id,
        local_updated__date__gte: gteDate,
        local_updated__date__lte: lteDate,
        page: currentPage
      }),
    retry: false,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (!casesBySearch) return
    const maxPage = Math.ceil(casesBySearch?.count / 20)
    setCases(casesBySearch?.results)
    setMaxPage(maxPage)
  }, [casesBySearch])

  const sortCasesByCaseType = ({ sortBy }: { sortBy: string }) => {
    const sortedCases = [...cases].sort((a, b) =>
      sortDirection === "asc"
        ? a[sortBy] < b[sortBy]
          ? 1
          : -1
        : a[sortBy] > b[sortBy]
        ? 1
        : -1
    )
    setCases(sortedCases)
    setSortBy(sortBy)
    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
  }

  useEffect(() => {
    if (search === "") return
    clearCurrentPage()
  }, [currentPage])

  const handleSearch = () => {
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
  }

  useEffect(() => {
    if (search === "") {
      if (casesBySearch?.results.length === 0) return
      setCases(casesBySearch?.results)
    } else handleSearch()
  }, [debouncedSearch])

  return {
    cases,
    search,
    setSearch,
    sortCasesByCaseType,
    maxPage,
    currentPage,
    handlePrevClick,
    handleNextClick,
    jumpToPage,
    sortDirection,
    sortBy,
    setSearchBy,
    setGteDate,
    setLteDate,
    gteDate,
    lteDate
  }
}

export default useTable
