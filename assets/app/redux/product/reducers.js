import types from './types'

const initialState = {
  products: []
}

export default function (state = initialState, action) {
  switch (action.type) {
  case types.SET_PRODUCTS:
    return {
      ...state,
      products: action.products
    }
  default:
    return state
  }
}
