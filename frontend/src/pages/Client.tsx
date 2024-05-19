import { getCases } from "@/components/services/cases"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

export default function ClientPage() {
  const { id } = useParams()
  const { data: cases } = useQuery({
    queryKey: ["cases"],
    queryFn: () =>
      getCases({
        client: id,
        local_updated__date__gte: "2021-03-01",
        local_updated__date__lte: "2022-03-25"
      }),
    retry: false,
    refetchOnWindowFocus: false
  })
  console.log(cases)
  return (
    <div>
      <h2>Client ID: {id}</h2>
    </div>
  )
}
