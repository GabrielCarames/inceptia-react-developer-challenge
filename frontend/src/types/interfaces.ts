import { Dispatch, SetStateAction } from "react"

export interface InputErrorProps {
  message: string
}

export interface InputGroupProps {
  containerClassName?: string
  label: string
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
  htmlFor: string
  children?: React.ReactNode
}

export interface InputProps {
  props: React.InputHTMLAttributes<HTMLInputElement>
}

export interface ButtonProps {
  className?: string
  children: React.ReactNode
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>
  type: "button" | "submit" | "reset"
}

export interface UseFormProps {
  onSubmit: ({ data }: FormDataProps) => void
}

export interface InputError {
  [inputName: string]: {
    message: string
  }
}

export interface FormDataProps {
  data: { [k: string]: FormDataEntryValue }
}

export interface HandleAxiosRequestsProps {
  method: "get" | "post" | "put" | "delete" | "patch"
  url: string
  body?: { [k: string]: FormDataEntryValue }
  headers?: { [k: string]: string }
  errorMessage?: string
  successMessage?: string
}

export interface UserProps {
  id: number
  email: string
  first_name: string
  last_name: string
  profile_image: string
  groups: { id: number; name: string }[]
  is_active: boolean
}

export interface LoginResponseProps {
  token: string
  email: string
}

export interface LayoutProps {
  children: React.ReactNode
}

export interface ClientProps {
  id: number
  name: string
  users: UserProps[]
}

export interface GetCasesProps {
  client?: string
  local_updated__date__gte?: string
  local_updated__date__lte?: string
  page: number
}

interface Client {
  id: number
  name: string
}

export interface CaseResult {
  result_id: number
  name: string
  is_final: boolean
  contacted: boolean
}

export interface CaseResponse {
  text: string
  time: number
  confidence: number
}

interface CaseTranscription {
  text: string
  time: number
  confidence: number
}

interface CaseLog {
  responses: CaseResponse[]
  result_id: number
  commitment: string
  got_promise: boolean
  transcription: CaseTranscription[]
  final_sip_code: number
}

interface ExtraMetadata {
  dni: string
  grupo: string
  orden: string
}

export interface InboundCase {
  id: number
  client: Client
  case_uuid: string
  phone: number
  first_name: string
  last_name: string
  code: string | null
  case_result: CaseResult
  case_duration: string
  case_log: CaseLog
  extra_metadata: ExtraMetadata
  recording: string
  is_complete: boolean
  status: string
  last_updated: string
  is_active: boolean
}

export interface PaginatedResponse {
  count: number
  next: string | null
  previous: string | null
  results: InboundCase[]
}

export interface TableProps {
  cases: InboundCase[]
  sortCasesByCaseType: ({
    sortBy,
    cases,
    handleSetCases
  }: sortCasesByCaseTypeProps) => void
  sortDirection: string
  sortBy: InboundCaseKeys
  handleSetCases: (newCases: InboundCase[]) => void
  isLoading: boolean
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  handlePrevClick: () => void
  handleNextClick: () => void
  jumpToPage: (e: React.FormEvent<HTMLFormElement>) => void
}

export interface TableSearchProps {
  placeholder: string
  search: string
  setSearch: (value: string) => void
  setSearchBy: (value: string) => void
  setGteDate: (value: string) => void
  setLteDate: (value: string) => void
  gteDate: string
  lteDate: string
}

export interface useSearchProps {
  currentPage: number
  clearCurrentPage: () => void
}

export type InboundCaseKeys = keyof InboundCase

export interface sortCasesByCaseTypeProps {
  sortBy: InboundCaseKeys
  cases: InboundCase[]
  handleSetCases: (cases: InboundCase[]) => void
}

export interface handleSearchProps {
  searchBy: string
  cases: InboundCase[]
  setCases: (cases: InboundCase[]) => void
  setMaxPage: (page: number) => void
}

export interface DateInputProps {
  name: string
  id: string
  max: () => string
  onChange: (value: string) => void
  value: string
}

export interface PaginationButtonsProps {
  currentPage: number
  totalPages: number
  handlePrevClick: () => void
  handleNextClick: () => void
}

export interface PaginationArrowProps {
  handlePrevClick: () => void
  orientation: string
}

export interface GoToPageProps {
  totalPages: number
  jumpToPage: (e: React.FormEvent<HTMLFormElement>) => void
}

export interface ShowSidebarButtonProps {
  openSidebar: boolean
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

export interface SidebarProps {
  openSidebar: boolean
  setOpenSidebar: Dispatch<SetStateAction<boolean>>
}

export interface HeaderProps {
  openSidebar: boolean
}

export interface MessageProps {
  text: string
  role: string
  time?: number
}

export interface ResponsesAndTranscriptionProps {
  responses: CaseResponse[]
  transcription: CaseTranscription[]
}

export interface CaseResponseWithRole extends CaseResponse {
  role: string
}

export interface CaseTranscriptionWithRole extends CaseTranscription {
  role: string
}

export interface ResponsesAndTranscriptionWithRoleProps {
  responses: CaseResponseWithRole[]
  transcription: CaseTranscriptionWithRole[]
}

export interface ConversationProps {
  conversation: CaseResponseWithRole[] | CaseTranscriptionWithRole[]
}
