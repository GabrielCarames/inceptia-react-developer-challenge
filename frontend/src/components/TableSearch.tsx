import { TableSearchProps } from "@/types/interfaces"
import DateInput from "./DateInput"

const TableSearch = ({
  placeholder,
  search,
  setSearch,
  setSearchBy,
  setGteDate,
  setLteDate,
  gteDate,
  lteDate
}: TableSearchProps) => {
  const maxGteDate = () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    return yesterday.toISOString().split("T")[0]
  }

  const maxLteDate = () => {
    const today = new Date()
    today.setDate(today.getDate())
    return today.toISOString().split("T")[0]
  }

  return (
    <div className="w-full flex justify-between items-center mb-6">
      <div className="relative flex h-12 w-full max-w-2xl items-center border-stroke bg-gray-2 pl-4 text-white bg-[#F1F2F3] dark:bg-tuna border border-white-gallery dark:border-tuna border-b-transparent rounded-lg">
        <button className="absolute top-1/2 left-4 -translate-y-1/2 h-8">
          <span className="icon-[ic--baseline-search] size-8 bg-black dark:bg-white" />
        </button>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent pr-4 pl-9 outline-none outline focus:outline-none focus:border-persian-green text-black dark:text-white placeholder:text-black dark:placeholder:text-white"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          name="order"
          className="w-full max-w-[200px] hover:text-white h-full hover:bg-persian-green border-persian-green rounded-lg rounded-l-none bg-white text-black dark:text-white dark:bg-tuna border p-2 cursor-pointer"
          onChange={e => setSearchBy(e.target.value)}
          defaultValue={"last_updated"}
        >
          <option value="last_updated">Buscar por Gestionado</option>
          <option value="case_uuid">Buscar por ID Caso</option>
          <option value="phone">Buscar por Teléfono</option>
          <option value="dni">Buscar por DNI</option>
          <option value="case_result name">Buscar por Estado</option>
        </select>
      </div>
      <div className="text-black flex items-center gap-2 h-12">
        <DateInput
          name="gte"
          id="gte"
          max={maxGteDate}
          onChange={setGteDate}
          value={gteDate}
        />
        <DateInput
          name="lte"
          id="lte"
          max={maxLteDate}
          onChange={setLteDate}
          value={lteDate}
        />
      </div>
    </div>
  )
}

export default TableSearch
