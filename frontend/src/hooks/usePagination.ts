import { useState } from "react"

const defaultCurrentPage = () => {
  if (localStorage?.getItem("currentPage")) {
    const { page } = JSON.parse(localStorage.getItem("currentPage") ?? "")
    return page
  }
  return 1
}

const usePagination = (maxPage: number) => {
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage())

  const clearCurrentPage = () => {
    localStorage?.removeItem("currentPage")
    setCurrentPage(1)
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      localStorage?.setItem(
        "currentPage",
        JSON.stringify({
          page: currentPage - 1,
          name: "products"
        })
      )
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < maxPage) {
      localStorage?.setItem(
        "currentPage",
        JSON.stringify({
          page: currentPage + 1,
          name: "products"
        })
      )
      setCurrentPage(currentPage + 1)
    }
  }

  const jumpToPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const fields = Object.fromEntries(formData.entries())
    const page = Number(fields?.jumptopage)
    if (page === 0) return
    localStorage?.setItem(
      "currentPage",
      JSON.stringify({
        page: page,
        name: "products"
      })
    )
    setCurrentPage(page)
  }

  return {
    currentPage,
    handlePrevClick,
    handleNextClick,
    jumpToPage,
    clearCurrentPage
  }
}

export default usePagination
