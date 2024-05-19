import { useState } from "react"
import { useEffect } from "react"
import { useDebounce } from "@uidotdev/usehooks"
import usePagination from "./usePagination"
import { useQuery } from "@tanstack/react-query"
import { getCases } from "@/components/services/cases"

const useTable = ({ id }: { id: string }) => {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [maxPage, setMaxPage] = useState(1)
  const debouncedFilter = useDebounce(search, 500)
  const {
    currentPage,
    handlePrevClick,
    handleNextClick,
    jumpToPage,
    clearCurrentPage
  } = usePagination(maxPage)

  const { data: casesBySearch } = useQuery({
    queryKey: ["casesBySearch", debouncedFilter, currentPage],
    queryFn: () =>
      getCases({
        client: id,
        local_updated__date__gte: "2021-03-01",
        local_updated__date__lte: "2022-03-25",
        page: currentPage
      }),
    retry: false,
    refetchOnWindowFocus: false
    // enabled: debouncedFilter !== ""
  })

  console.log(casesBySearch)

  // const sortTable = {
  //   idCase: { idCase: debouncedFilter },
  //   phone: { phone: debouncedFilter },
  //   dni: { dni: debouncedFilter },
  //   group: { group: debouncedFilter },
  //   order: { order: debouncedFilter },
  //   call: { call: debouncedFilter },
  // }

  // const getSortBy = sortBy => {
  //   switch (sortBy) {
  //     case "idCase":
  //       return sortTable.idCase
  //     case "phone":
  //       return sortTable.phone
  //     case "dni":
  //       return sortTable.dni
  //       case "group":
  //       return sortTable.group
  //       case "order":
  //       return sortTable.order
  //       case "call":
  //       return sortTable.call
  //   }
  // }

  useEffect(() => {
    if (search === "") return
    clearCurrentPage()
  }, [search, sortBy, currentPage])

  useEffect(() => {
    const maxPage = Math.ceil(casesBySearch?.count / 20)
    setMaxPage(maxPage)
  }, [casesBySearch])

  return {
    cases: casesBySearch?.results,
    search,
    setSearch,
    setSortBy,
    maxPage,
    currentPage,
    handlePrevClick,
    handleNextClick,
    jumpToPage
  }
}

export default useTable
