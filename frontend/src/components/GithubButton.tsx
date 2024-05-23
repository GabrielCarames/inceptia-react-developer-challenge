import { Link } from "react-router-dom"

export default function GithubButton() {
  return (
    <Link
      to="https://github.com/GabrielCarames/inceptia-react-developer-challenge"
      className="flex items-center gap-3 border border-persian-green rounded-lg p-2 px-4 hover:bg-persian-green hover:text-white bg-white dark:bg-tuna"
      target="_blank"
    >
      <div className="bg-white rounded-lg p-0 flex justify-center items-center">
        <img src="/assets/images/github-logo.svg" className="size-8" alt="" />
      </div>
      Github
    </Link>
  )
}
