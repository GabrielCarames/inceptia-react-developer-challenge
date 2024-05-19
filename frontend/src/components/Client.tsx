import { Link } from "react-router-dom"

export default function Client({
  clientId,
  name
}: {
  clientId: number
  name: string
}) {
  return (
    <li>
      <Link
        to={`/admin/client/${clientId}`}
        className="flex items-center gap-2"
      >
        <span className="icon-[ic--outline-account-circle] size-8" />
        <p>{name}</p>
      </Link>
    </li>
  )
}
