import { useEffect, useState } from "react"

const useSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOpenSidebar(false)
      } else {
        setOpenSidebar(true)
      }
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { openSidebar, setOpenSidebar }
}

export default useSidebar
