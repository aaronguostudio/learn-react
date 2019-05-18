import { LOAD_PRODUCT } from './actionTypes'

export const loadProduct = products => ({
  type: LOAD_PRODUCT,
  payload: products
})