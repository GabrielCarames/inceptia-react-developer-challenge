import {
  ConversationProps,
  ResponsesAndTranscriptionProps
} from "@/types/interfaces"
import { addRoleToConversation } from "@/utils/addRoleToConversation"
import { intercalateArrays } from "@/utils/intercalateArrays"
import { useEffect, useState } from "react"

const useChat = ({
  responses,
  transcription
}: ResponsesAndTranscriptionProps) => {
  const [showChat, setShowChat] = useState(false)
  const [conversation, setConversation] = useState<ConversationProps | []>([])

  useEffect(() => {
    if (!showChat) return
    const responsesWithRole = addRoleToConversation({
      conversation: responses,
      role: "bot"
    })
    const transcriptionWithRole = addRoleToConversation({
      conversation: transcription,
      role: "cliente"
    })
    const conversation: any = intercalateArrays({
      responses: responsesWithRole,
      transcription: transcriptionWithRole
    })
    setConversation(conversation)
  }, [showChat])

  return { showChat, setShowChat, conversation }
}

export default useChat
