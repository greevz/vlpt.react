import { find, map } from 'lodash'
import actions from './actions'
import { localStorageService } from 'services'
import { CartItemModel } from 'models'

const setCart = actions.setCart

const fetchAndSetCart = () => async (dispatch) => {
  const cart = await localStorageService.getCart()

  await dispatch(setCart(cart))

  return cart
}

const addProductToCart = (product) => async (dispatch) => {
  const cart = await localStorageService.getCart()

  // Find existing cart item.
  const cartItem = find(cart, { name: product.name })

  if (!cartItem) {
    cart.push(new CartItemModel({
      product,
      quantity: 1
    }))
  } else {
    cartItem.quantity += 1
  }

  await localStorage.setCart(map(cart, (cartItem) => cartItem.serialise()))

  await dispatch(setCart(cart))

  return cart
}

export default {
  setCart,
  fetchAndSetCart,
  addProductToCart
}
