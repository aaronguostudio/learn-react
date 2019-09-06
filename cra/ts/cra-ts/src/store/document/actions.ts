import { SET_AUTHOR, SET_DOCUMENT, SET_TITLE, DocumentState } from './types'

export function setAuthor (author: string) {
  return {
    type: SET_AUTHOR,
    payload: author
  }
}

export function setTitle (title: string) {
  return {
    type: SET_TITLE,
    payload: title
  }
}

export function setDocument (document: DocumentState) {
  return {
    type: SET_DOCUMENT,
    payload: document
  }
}
