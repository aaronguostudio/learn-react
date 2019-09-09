export interface User {
  id: number | null
  name: string | null
  role: string[] | null
}

export interface UserState {
  users: User[] | null,
  selectedUser: User | null
}

export const SET_USERS = "SET_USERS"
export const SET_SELECTED_USER = "SET_SELECTED_USER"

interface SetUsersAction {
  type: typeof SET_USERS,
  payload: User[]
}

interface SetSelectedUser {
  type: typeof SET_SELECTED_USER,
  payload: User
}

export type UserActionTypes = SetUsersAction | SetSelectedUser
