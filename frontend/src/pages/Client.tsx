import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import useTable from "@/hooks/useTable"
import { useParams } from "react-router-dom"

export default function ClientPage() {
  const { id } = useParams()
  const {
    cases,
    search,
    setSearch,
    sortCasesByCaseType,
    maxPage,
    currentPage,
    handlePrevClick,
    handleNextClick,
    jumpToPage,
    sortBy,
    sortDirection
  } = useTable({ id: id ?? "0" })

  return (
    <div>
      <div className="flex flex-col px-4 sm:px-0">
        <TableSearch
          search={search}
          setSearch={setSearch}
          placeholder="Buscar..."
          // setSortBy={setSortBy}
        />
        <div className="w-full overflow-x-auto mb-10">
          <Table
            cases={cases}
            sortCasesByCaseType={sortCasesByCaseType}
            sortBy={sortBy}
            sortDirection={sortDirection}
          />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={maxPage}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          jumpToPage={jumpToPage}
        />
      </div>
    </div>
  )
}
