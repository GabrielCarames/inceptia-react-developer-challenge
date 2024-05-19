import { getClients } from "./services/clients"
import Client from "./Client"
import { ClientProps } from "@/types/interfaces"
import { useQuery } from "@tanstack/react-query"

export default function Clients() {
  const { data: clients } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClients(),
    retry: false,
    refetchOnWindowFocus: false
  })

  return (
    <aside className="w-full max-w-60 h-full min-h-[calc(100vh-80px)] p-4 dark:bg-shark bg-white border-t border-t-ghost-white dark:border-tuna flex flex-col gap-5">
      <h2>Clientes</h2>
      <ul>
        {clients?.map((client: ClientProps) => (
          <Client key={client?.id} name={client?.name} clientId={client?.id} />
        ))}
      </ul>
    </aside>
  )
}
