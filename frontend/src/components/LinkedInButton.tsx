import { Link } from "react-router-dom"

export default function LinkedInButton() {
  return (
    <Link
      to="https://www.linkedin.com/in/gabrielcarames/"
      className="flex items-center gap-3 border border-persian-green rounded-lg p-2 px-4 hover:bg-persian-green hover:text-white bg-white dark:bg-tuna"
      target="_blank"
    >
      <img src="/assets/images/linkedin-logo.webp" className="size-8" alt="" />
      LinkedIn
    </Link>
  )
}
