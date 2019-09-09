import {
  DocumentState,
  SET_AUTHOR,
  SET_TITLE,
  SET_DOCUMENT,
  DocumentActionTypes,
} from './types'

const initialState: DocumentState = {
  author: 'Aaron Guo',
  title: 'Logan API'
}

export function documentReducer (
  state = initialState,
  action: DocumentActionTypes
) : DocumentState {
  switch (action.type) {
    case SET_DOCUMENT:
      return {
        ...action.payload
      }
    case SET_AUTHOR:
      return {
        ...state,
        author: action.payload
      }
    case SET_TITLE:
      return {
        ...state,
        title: action.payload
      }
    default:
      return state
  }
}
