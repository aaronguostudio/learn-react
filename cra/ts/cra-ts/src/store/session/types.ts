export interface SessionState {
  companyId: number | null
  token: string | null
  name: string | null
  id: number | null
  role: string[] | null,
  theme: string | null
}

export const SET_SESSION = "SET_SESSION"

interface SetSessionAction {
  type: typeof SET_SESSION
  payload: SessionState
}

export type SessionActionTypes = SetSessionAction
