import types from './types'

const initialState = {
  cart: []
}

export default function (state = initialState, action) {
  switch (action.type) {
  case types.SET_CART:
    return {
      ...state,
      cart: action.cart
    }
  default:
    return state
  }
}
