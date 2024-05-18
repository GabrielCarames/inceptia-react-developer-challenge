import { LayoutProps } from "@/types/interfaces"
import Header from "./Header"

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <aside className="w-full max-w-60 h-full min-h-[calc(100vh-96px)] p-4">
          left
        </aside>
        <main className="p-4 w-full">{children}</main>
      </div>
    </div>
  )
}
