import handleRequest from "@/utils/handleRequest"
import queryString from "query-string"

const removeUndefinedFields = (queryParams: string) => {
  const pairs = queryParams.split("&")
  const filteredPairs = pairs.filter(pair => {
    const [, value] = pair.split("=")
    return value !== "undefined"
  })
  const result = filteredPairs.join("&")
  return result
}

interface GetCasesBody {
  client?: string
  local_updated__date__gte?: string
  local_updated__date__lte?: string
}

export const getCases = async ({
  client: bot = "",
  local_updated__date__gte = "",
  local_updated__date__lte = ""
}: GetCasesBody) => {
  const queryParams = queryString.stringify({
    bot,
    local_updated__date__gte,
    local_updated__date__lte
  })
  const defaultUrl = `${
    import.meta.env.VITE_API_BASE_URL
  }/inbound-case/?${removeUndefinedFields(queryParams)}`
  const res = await handleRequest({
    method: "get",
    url: defaultUrl,
    errorMessage: "Ha ocurrido un error al obtener los casos"
  })
  return res?.data
}
