import { TableSearchProps } from "@/types/interfaces"

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

  const minLteDate = () => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

  return (
    <div className="relative flex h-14 w-full items-center border-stroke bg-gray-2 pl-4 text-white bg-shark border border-tuna border-b-transparent rounded-lg">
      <button className="absolute top-1/2 left-4 -translate-y-1/2">
        <span className="icon-[ic--baseline-search] size-8" />
      </button>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent pr-4 pl-9 outline-none outline focus:outline-none focus:border-blue-1"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select
        name="order"
        className="mr-2 w-full max-w-[200px] border border-stroke border-rock-blue rounded-lg text-white bg-tuna p-2"
        onChange={e => setSearchBy(e.target.value)}
        defaultValue={"last_updated"}
      >
        <option value="last_updated">Buscar por Gestionado</option>
        <option value="case_uuid">Buscar por ID Caso</option>
        <option value="phone">Buscar por Teléfono</option>
        <option value="dni">Buscar por DNI</option>
        <option value="case_result name">Buscar por Estado</option>
      </select>
      <div className="text-black flex items-center gap-2">
        <input
          type="date"
          name="gte"
          id="gte"
          max={maxGteDate()}
          value={gteDate}
          onChange={e => setGteDate(e.target.value)}
        />
        <input
          type="date"
          name="lte"
          id="lte"
          min={minLteDate()}
          value={lteDate}
          onChange={e => setLteDate(e.target.value)}
        />
      </div>
    </div>
  )
}

export default TableSearch
