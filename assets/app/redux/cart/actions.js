import types from './types'

const setCart = (cart) => ({
  type: types.SET_CART,
  cart
})

export default {
  setCart
}
