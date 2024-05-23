import useChat from "@/hooks/useChat"
import Chat from "./Chat"
import { ResponsesAndTranscriptionProps } from "@/types/interfaces"

export default function ChatButton({
  responses,
  transcription
}: ResponsesAndTranscriptionProps) {
  const { showChat, setShowChat, conversation } = useChat({
    responses,
    transcription
  })

  return (
    <>
      {showChat && (
        <Chat conversation={conversation} setShowChat={setShowChat} />
      )}
      <button
        className="max-w-[80px] truncate bg-persian-green flex justify-center items-center p-2 rounded-lg hover:bg-monte-carlo"
        onClick={() => setShowChat(true)}
      >
        <span className="icon-[ic--baseline-chat] size-6" />
      </button>
    </>
  )
}
