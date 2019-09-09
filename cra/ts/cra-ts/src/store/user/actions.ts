import {
  SET_USERS,
  SET_SELECTED_USER,
  User,
} from './types'

export function setUsers (users: User[]) {
  return {
    type: SET_USERS,
    payload: users
  }
}

export function setUser (user: User) {
  return {
    type: SET_SELECTED_USER,
    payload: user
  }
}
