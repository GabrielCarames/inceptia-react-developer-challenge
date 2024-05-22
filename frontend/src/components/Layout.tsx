import { LayoutProps } from "@/types/interfaces"
import Header from "./Header"
import Sidebar from "./Sidebar"
import useSidebar from "@/hooks/useSidebar"

export default function Layout({ children }: LayoutProps) {
  const { openSidebar, setOpenSidebar } = useSidebar()

  return (
    <div className="flex flex-col w-full">
      <Header openSidebar={openSidebar} />
      <div className="flex relative w-full">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <main className="p-4 w-full overflow-x-auto">{children}</main>
      </div>
    </div>
  )
}
