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
    sortDirection,
    setSearchBy,
    setGteDate,
    setLteDate,
    gteDate,
    lteDate,
    handleSetCases,
    isLoading
  } = useTable({ id: id ?? "0" })

  return (
    <div className="flex flex-col sm:px-0 overflow-x-auto w-full">
      <h1 className="text-xl mb-5">Lista de clientes de ${"cliente"}</h1>
      <TableSearch
        search={search}
        setSearch={setSearch}
        placeholder="Buscar..."
        setSearchBy={setSearchBy}
        setGteDate={setGteDate}
        setLteDate={setLteDate}
        gteDate={gteDate}
        lteDate={lteDate}
      />
      <div className="w-full overflow-x-auto max-h-[calc(100vh-321px)] scrollbar-thin scrollbar-thumb-persian-green scrollbar-track-gray-200 dark:scrollbar-track-tuna rounded-2xl">
        <Table
          cases={cases}
          sortCasesByCaseType={sortCasesByCaseType}
          sortBy={sortBy}
          sortDirection={sortDirection}
          handleSetCases={handleSetCases}
          isLoading={isLoading}
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
  )
}
