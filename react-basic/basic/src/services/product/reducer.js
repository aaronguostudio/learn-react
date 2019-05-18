import { LOAD_PRODUCT } from './actionTypes'

// Mock
const initialState = {
  products: [
    {id: 1, name: 'Application'},
    {id: 2, name: 'Design'},
    {id: 3, name: 'Mobile'},
    {id: 4, name: 'Web'},
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}