import { CaseResponseWithRole } from "@/types/interfaces"
import Message from "./Message"

interface ChatProps {
  conversation: any | []
  setShowChat: (value: boolean) => void
}

export default function Chat({ conversation, setShowChat }: ChatProps) {
  return (
    <section className="fixed inset-0 bg-[#000000c2] flex justify-center items-center z-20">
      <div className="flex justify-center items-center flex-col gap-3 w-full max-w-2xl bg-white dark:bg-tuna rounded-lg p-4 relative">
        <h3 className="font-bold">Conversación</h3>
        <button
          className="flex justify-center items-center absolute top-3 right-2 group duration-300"
          onClick={() => setShowChat(false)}
        >
          <span className="icon-[ic--baseline-close] size-7 group-hover:bg-persian-green" />
        </button>
        <ul className="flex flex-col gap-2 text-black dark:text-white max-w-screen-md max-h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-mediumslateblue scrollbar-track-mercury dark:scrollbar-track-bunker pr-5 py-2">
          {conversation?.map((message: CaseResponseWithRole) => (
            <Message
              key={message?.time}
              text={message.text}
              role={message.role}
              time={message.time}
            />
          ))}
          {conversation?.length === 0 && (
            <li className="text-center text-black dark:text-white">
              No hay mensajes en este chat
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}
