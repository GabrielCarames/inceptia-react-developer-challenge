import { getClients } from "./services/clients"
import Client from "./Client"
import { ClientProps } from "@/types/interfaces"
import { useQuery } from "@tanstack/react-query"
import useSidebar from "@/hooks/useSidebar"
import ShowSidebarButton from "./ShowSidebarButton"

export default function Clients() {
  const { data: clients } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClients(),
    retry: false,
    refetchOnWindowFocus: false
  })
  const { openSidebar, setOpenSidebar } = useSidebar()

  return (
    <>
      {!openSidebar && (
        <ShowSidebarButton
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          className="absolute sm:left-3 -top-14 left-7"
        />
      )}
      <aside
        className={`${
          openSidebar ? "translate-x-0" : "-translate-x-96 absolute"
        } w-full max-w-60 h-full min-h-[calc(100vh-80px)] p-4 dark:bg-shark bg-white border-t border-t-ghost-white dark:border-tuna flex flex-col gap-5`}
      >
        <div className="flex justify-between items-center">
          <h2>Clientes</h2>
          <ShowSidebarButton
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
        </div>
        <ul>
          {clients?.map((client: ClientProps) => (
            <Client
              key={client?.id}
              name={client?.name}
              clientId={client?.id}
            />
          ))}
        </ul>
      </aside>
    </>
  )
}
