export const addRoleToConversation = ({
  conversation,
  role
}: {
  conversation: any
  role: string
}) => {
  return conversation.map((message: any) => ({ ...message, role }))
}
