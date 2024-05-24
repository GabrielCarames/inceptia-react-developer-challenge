import { getClients } from "../services/clients"
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
          openSidebar
            ? "translate-x-0 absolute md:relative"
            : "-translate-x-96 absolute"
        } w-full max-w-60 h-full min-h-[calc(100vh-80px)] dark:bg-shark bg-white border-t border-t-ghost-white dark:border-tuna flex flex-col justify-between z-10`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center p-4 pb-0">
            <h2 className="font-bold">Clientes</h2>
            <ShowSidebarButton
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
          </div>
          <ul className="flex flex-col gap-5">
            {clients?.map((client: ClientProps) => (
              <Client
                key={client?.id}
                name={client?.name}
                clientId={client?.id}
              />
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 md:hidden p-4">
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
