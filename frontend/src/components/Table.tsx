import { TableProps } from "@/types/interfaces"

export default function Table({
  cases,
  sortCasesByCaseType,
  sortDirection,
  sortBy,
  handleSetCases
}: TableProps) {
  const handleClassName = (sortName: string) => {
    return `${
      sortBy === sortName && sortDirection === "asc"
        ? "icon-[ic--baseline-chevron-left] bg-persian-green"
        : "icon-[ic--baseline-chevron-right] bg-persian-green"
    } rotate-90 size-8`
  }

  const defaultTdClassName =
    "border-b border-white-gallery dark:border-tuna py-5 px-4"

  return (
    <table className="w-full table-auto text-black dark:bg-shark bg-white dark:text-white border dark:border-tuna rounded-2xl">
      <thead>
        <tr className="text-left bg-persian-green text-white">
          <th className="w-[250px] font-medium px-4 py-2">
            <button
              className="w-max flex gap-2 items-center"
              onClick={() =>
                sortCasesByCaseType({
                  sortBy: "last_updated",
                  cases,
                  handleSetCases
                })
              }
            >
              <span>Gestionado</span>
              <span className={handleClassName("last_updated")} />
            </button>
          </th>
          <th className="min-w-[80px] px-4 font-medium py-2">
            <button
              className="w-max flex gap-2 items-center"
              onClick={() =>
                sortCasesByCaseType({
                  sortBy: "case_uuid",
                  cases,
                  handleSetCases
                })
              }
            >
              <span>ID Caso</span>
              <span className={handleClassName("case_uuid")} />
            </button>
          </th>
          <th className="min-w-[120px] px-4 font-medium py-2">
            <button
              className="w-max flex gap-2 items-center"
              onClick={() =>
                sortCasesByCaseType({ sortBy: "phone", cases, handleSetCases })
              }
            >
              <span>Teléfono</span>
              <span className={handleClassName("phone")} />
            </button>
          </th>
          <th className="min-w-[100px] px-4 font-medium py-2">
            <button className="w-max flex gap-2 items-center">
              <span>DNI</span>
            </button>
          </th>
          <th className="min-w-[80px] px-4 font-medium py-2">
            <div className="flex w-max gap-2 items-center">
              <span>Grupo</span>
            </div>
          </th>
          <th className="min-w-[80px] px-4 font-medium py-2">
            <div className="flex w-max gap-2 items-center">
              <span>Orden</span>
            </div>
          </th>
          <th className="min-w-[80px] px-4 font-medium py-2">
            <button
              className="w-max flex gap-2 items-center"
              onClick={() =>
                sortCasesByCaseType({
                  sortBy: "case_duration",
                  cases,
                  handleSetCases
                })
              }
            >
              <span>Llamada</span>
              <span className={handleClassName("case_duration")} />
            </button>
          </th>
          <th className="w-[290px] px-4 font-medium py-2">
            <div className="flex w-max gap-2 items-center">
              <span>Estado</span>
            </div>
          </th>
        </tr>
      </thead>
      {cases?.length <= 0 && (
        <tbody>
          <tr className="my-5 flex w-full pl-3 min-w-[250px]">
            <td>No hay participantes registrados</td>
          </tr>
        </tbody>
      )}
      <tbody>
        {cases?.map(_case => (
          <tr key={_case.id}>
            <td className={`${defaultTdClassName}`}>
              <p className="max-w-[200px] truncate">{_case?.last_updated}</p>
            </td>
            <td className={`${defaultTdClassName}`}>
              <p className="max-w-[80px] truncate">{_case?.case_uuid}</p>
            </td>
            <td className={`${defaultTdClassName}`}>
              <p className="max-w-[120px] truncate">{_case?.phone}</p>
            </td>
            <td className={`${defaultTdClassName}`}>
              <p className="max-w-[100px] truncate">
                {_case?.extra_metadata?.dni}
              </p>
            </td>
            <td className={`${defaultTdClassName}`}>
              <p className="max-w-[80px] truncate">
                {_case?.extra_metadata?.grupo}
              </p>
            </td>
            <td className={`${defaultTdClassName}`}>
              <p className="max-w-[80px] truncate">
                {_case?.extra_metadata?.orden}
              </p>
            </td>
            <td className={`${defaultTdClassName}`}>
              <p className="max-w-[100px] truncate">{_case?.case_duration}</p>
            </td>
            <td className={`${defaultTdClassName}`}>
              <p className="max-w-[260px] truncate">
                {_case?.case_result?.name}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
