import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <main className="w-full flex justify-center items-center h-full min-h-screen">
      <div className="w-full max-w-xl flex justify-center items-center flex-col gap-10">
        <div className="flex gap-5 flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-red-500">404</h1>
          <h2 className="text-4xl font-bold">Página no encontrada</h2>
        </div>
        <Link className="hover:underline hover:text-persian-green" to="/admin">
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
