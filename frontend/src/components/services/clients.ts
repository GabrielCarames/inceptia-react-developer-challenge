import handleRequest from "@/utils/handleRequest"

export const getClients = async () => {
  const res = await handleRequest({
    method: "get",
    url: `${import.meta.env.VITE_API_BASE_URL}/clients/`,
    errorMessage: "Ha ocurrido un error al obtener los clientes"
  })
  return res
}
