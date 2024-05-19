import { HandleRequestsProps } from "@/types/interfaces"
import { useEffect, useState } from "react"

const useHandleRequests = ({ request }: HandleRequestsProps) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<null | unknown>(null)
  const [error, setError] = useState<null | unknown>(null)

  const handleRequest = async () => {
    try {
      setLoading(true)
      const res = (await request()) as { data: unknown }
      const data = res?.data
      setData(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleRequest()
  }, [])

  return { loading, data, error }
}

export default useHandleRequests
