import { MessageProps } from "@/types/interfaces"

const formatTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  })
}

export default function Message({ text, role, time }: MessageProps) {
  return (
    <li className="flex text-sm sm:text-base">
      <span
        className={`${
          role === "cliente"
            ? "text-persian-green"
            : "dark:text-monte-carlo text-green-700"
        } min-w-14 capitalize pt-2`}
      >
        {role}
      </span>
      <div className="p-2 pl-5 rounded-xl duration-300">
        <span>{text}</span>
        {time && (
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
            {formatTime(time)}
          </span>
        )}
      </div>
    </li>
  )
}
