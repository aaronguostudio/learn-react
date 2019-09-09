import {
  UserState,
  SET_USERS,
  SET_SELECTED_USER,
  UserActionTypes
} from './types'

const initialState: UserState = {
  users: null,
  selectedUser: null
}

export function userReducers (
  state = initialState,
  action: UserActionTypes
) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      }
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload
      }
    default:
      return state
  }
}
