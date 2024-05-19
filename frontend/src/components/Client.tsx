export default function Client({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-2">
      <span className="icon-[ic--outline-account-circle] size-8" />
      <p>{name}</p>
    </li>
  )
}
