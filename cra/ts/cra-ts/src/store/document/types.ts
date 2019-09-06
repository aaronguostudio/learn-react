export interface DocumentState {
  title: string,
  author: string
}

export const SET_AUTHOR = 'SET_AUTHOR'
export const SET_DOCUMENT = 'SET_DOCUMENT'
export const SET_TITLE = 'SET_TITLE'

interface SetDocumentAction {
  type: typeof SET_DOCUMENT
  payload: DocumentState
}

interface SetAuthorAction {
  type: typeof SET_AUTHOR
  payload: string
}

interface SetTitleAction {
  type: typeof SET_TITLE
  payload: string
}

export type DocumentActionTypes = SetAuthorAction | SetDocumentAction | SetTitleAction
