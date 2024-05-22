import toast from "react-hot-toast"
import axiosApiInstance from "./axiosInstance"
import { AxiosError, AxiosRequestHeaders } from "axios"
import { HandleAxiosRequestsProps } from "@/types/interfaces"

axiosApiInstance.interceptors.request.use(
  async config => {
    config.headers = {
      Authorization: `JWT ${localStorage.getItem("access_token")}`,
      ...config.headers
    } as AxiosRequestHeaders
    return config
  },
  error => {
    Promise.reject(error)
  }
)

const getErrorData = (data: string) => {
  if (data && typeof data === "object") {
    const keys = Object.keys(data)
    if (keys.length > 0) {
      return data[keys[0]]
    }
  }
  return data
}

const handleRequest = async ({
  method,
  url,
  body,
  headers,
  errorMessage,
  successMessage
}: HandleAxiosRequestsProps) => {
  let data = null
  let errorInfo: AxiosError | null = null
  const axiosData = {
    method,
    url,
    data: body,
    headers: {
      ...headers
    }
  }
  try {
    const response = await axiosApiInstance(axiosData)
    data = response?.data
    successMessage && toast && toast?.success && toast?.success(successMessage)
  } catch (error: any) {
    const errorReason = getErrorData(error?.response?.data)
    errorMessage &&
      toast &&
      toast?.error &&
      toast?.error(`${errorMessage}. \n Error: ${errorReason}`)
    errorInfo = error
  }

  return { data, error: errorInfo }
}

export default handleRequest
