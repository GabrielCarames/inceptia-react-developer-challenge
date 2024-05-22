import { LayoutProps } from "@/types/interfaces"
import Header from "./Header"
import Sidebar from "./Sidebar"
import useSidebar from "@/hooks/useSidebar"

export default function Layout({ children }: LayoutProps) {
  const { openSidebar, setOpenSidebar } = useSidebar()

  return (
    <div className="flex flex-col">
      <Header openSidebar={openSidebar} />
      <div className="flex relative">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <main className="p-4 w-full">{children}</main>
      </div>
    </div>
  )
}
