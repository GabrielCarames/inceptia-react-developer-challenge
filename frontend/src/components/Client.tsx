import { Link } from "react-router-dom"

export default function Client({
  clientId,
  name
}: {
  clientId: number
  name: string
}) {
  return (
    <li className="hover:bg-persian-green hover:text-white">
      <Link
        to={`/admin/cliente/${clientId}`}
        className="flex items-center gap-2 px-4 py-2"
      >
        <span className="icon-[ic--outline-account-circle] size-8" />
        <p>{name}</p>
      </Link>
    </li>
  )
}
