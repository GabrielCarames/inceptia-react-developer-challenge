import { LayoutProps } from "@/types/interfaces"
import Header from "./Header"
import Clients from "./Clients"

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex relative">
        <Clients />
        <main className="p-4 w-full">{children}</main>
      </div>
    </div>
  )
}
