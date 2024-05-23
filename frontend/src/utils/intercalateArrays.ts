import { ResponsesAndTranscriptionWithRoleProps } from "@/types/interfaces"

export const intercalateArrays = ({
  responses,
  transcription
}: ResponsesAndTranscriptionWithRoleProps) => {
  const result = []
  const maxLength = Math.max(responses.length, transcription.length)
  for (let i = 0; i < maxLength; i++) {
    if (i < responses.length) {
      result.push(responses[i])
    }
    if (i < transcription.length) {
      result.push(transcription[i])
    }
  }
  return result
}
