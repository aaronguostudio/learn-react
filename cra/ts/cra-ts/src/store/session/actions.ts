import {
  SET_SESSION,
  SessionState
} from './types'

export function setSession (session: SessionState) {
  return {
    type: SET_SESSION,
    payload: session
  }
}
