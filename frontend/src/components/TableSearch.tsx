import { TableSearchProps } from "@/types/interfaces"

const TableSearch = ({
  placeholder,
  search,
  setSearch,
  setSortBy
}: TableSearchProps) => {
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
      {setSortBy && (
        <select
          name="order"
          className="mr-2 w-full max-w-[200px] border border-stroke border-rock-blue rounded-lg text-white bg-tuna p-2"
          onChange={e => setSortBy(e.target.value)}
          defaultValue={"caseId"}
        >
          <option value="caseId">Buscar por ID Caso</option>
          <option value="phone">Buscar por Teléfono</option>
          <option value="dni">Buscar por DNI</option>
          <option value="group">Buscar por Grupo</option>
          <option value="order">Buscar por Orden</option>
          <option value="call">Buscar por Llamada</option>
          <option value="state">Buscar por Estado</option>
        </select>
      )}
    </div>
  )
}

export default TableSearch
