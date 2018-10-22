import types from './types'
import { ProductModel } from 'models'

const initialState = {
  product: new ProductModel(),
  products: []
}

export default function (state = initialState, action) {
  switch (action.type) {
  case types.SET_PRODUCT:
    return {
      ...state,
      product: action.product
    }
  case types.SET_PRODUCTS:
    return {
      ...state,
      products: action.products
    }
  default:
    return state
  }
}
