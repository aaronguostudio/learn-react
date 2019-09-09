import {
  SessionState,
  SET_SESSION,
  SessionActionTypes,
} from './types'

const initialState: SessionState = {
  companyId: null,
  token: 'Wwe2EisfO3cEFjksdf',
  name: 'Aaron Guo',
  id: null,
  role: null,
  theme: 'light'
}

export function sessionReducer (
  state = initialState,
  action: SessionActionTypes
) : SessionState {
  switch (action.type) {
    case SET_SESSION:
      return {
        ...action.payload
      }
    default:
      return state
  }
}
