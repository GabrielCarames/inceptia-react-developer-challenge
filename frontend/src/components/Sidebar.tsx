import { getClients } from "./services/clients"
import Client from "./Client"
import { ClientProps, SidebarProps } from "@/types/interfaces"
import { useQuery } from "@tanstack/react-query"
import ShowSidebarButton from "./ShowSidebarButton"
import useSignOut from "@/hooks/useSignOut"

export default function Sidebar({ openSidebar, setOpenSidebar }: SidebarProps) {
  const { data: clients } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClients(),
    retry: false,
    refetchOnWindowFocus: false
  })

  const { signOut, currentUser } = useSignOut()

  return (
    <>
      {!openSidebar && (
        <ShowSidebarButton
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          className="absolute sm:left-3 -top-14 left-4"
        />
      )}
      <aside
        className={`${
          openSidebar ? "translate-x-0 relative" : "-translate-x-96 absolute"
        } w-full max-w-60 h-full min-h-[calc(100vh-80px)] p-4 dark:bg-shark bg-white border-t border-t-ghost-white dark:border-tuna flex flex-col justify-between`}
      >
        <div className="flex flex-col gap-5">
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
        </div>
        <div className="flex flex-col gap-5 md:hidden">
          <span>{currentUser}</span>
          <button
            onClick={signOut}
            className="border border-persian-green h-12 rounded-lg p-4 flex justify-center items-center hover:bg-persian-green text-black dark:text-white hover:text-white"
          >
            Cerrar sesión
          </button>
        </div>
      </aside>
    </>
  )
}
