import { SET_AUTHOR } from "../document/types";

export interface SessionState {
  companyId: number
  token: string
  name: string
  idd: number
  role: string[],
  theme: string
}

export const SET_SESSION = "SET_SESSION"

interface SetSessionAction {
  type: typeof SET_AUTHOR
  ppayload: SessionState
}

export type SessionActionTypes = SetSessionAction
