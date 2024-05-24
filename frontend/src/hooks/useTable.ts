import { useState } from "react"
import { useEffect } from "react"
import usePagination from "./usePagination"
import { useQuery } from "@tanstack/react-query"
import { getCases } from "@/services/cases"
import { InboundCase } from "@/types/interfaces"
import useSearch from "./useSearch"
import useSort from "./useSort"

const useTable = ({ id }: { id: string }) => {
  const [maxPage, setMaxPage] = useState(1)
  const [cases, setCases] = useState<InboundCase[]>([])
  const [searchBy, setSearchBy] = useState("last_updated")
  const [gteDate, setGteDate] = useState("2021-03-01")
  const [lteDate, setLteDate] = useState("2022-03-25")
  const { sortDirection, sortBy, sortCasesByCaseType } = useSort()

  const {
    currentPage,
    handlePrevClick,
    handleNextClick,
    jumpToPage,
    clearCurrentPage
  } = usePagination(maxPage)
  const { search, debouncedSearch, setSearch, handleSearch } = useSearch({
    currentPage,
    clearCurrentPage
  })

  const MAX_RESULTS_PER_PAGE = 20

  const { data: casesBySearch, isLoading } = useQuery({
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
    const maxPage = Math.ceil(casesBySearch?.count / MAX_RESULTS_PER_PAGE)
    setCases(casesBySearch?.results)
    setMaxPage(maxPage)
  }, [casesBySearch])

  const handleSetCases = (newCases: InboundCase[]) => {
    setCases(newCases)
  }

  useEffect(() => {
    if (search === "") {
      if (casesBySearch?.results.length === 0) return
      setCases(casesBySearch?.results)
    } else handleSearch({ searchBy, cases, setCases, setMaxPage })
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
    lteDate,
    handleSetCases,
    isLoading
  }
}

export default useTable
