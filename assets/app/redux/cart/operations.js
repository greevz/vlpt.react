import { find, map, remove } from 'lodash'
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

  const cartItem = find(cart, (cartItem) => cartItem.product.name === product.name)

  if (!cartItem) {
    cart.push(new CartItemModel({
      product,
      quantity: 1
    }))
  } else {
    cartItem.quantity += 1
  }

  await localStorageService.setCart(map(cart, (cartItem) => cartItem.serialise()))

  await dispatch(setCart(cart))

  return cart
}

const removeProductFromCart = (product) => async (dispatch) => {
  const cart = await localStorageService.getCart()

  const cartItem = find(cart, (cartItem) => cartItem.product.name === product.name)

  if (cartItem.quantity === 1) {
    remove(cart, (cartItem) => cartItem.product.name === product.name)
  } else {
    cartItem.quantity -= 1
  }

  await localStorageService.setCart(map(cart, (cartItem) => cartItem.serialise()))

  await dispatch(setCart(cart))

  return cart
}

export default {
  addProductToCart,
  fetchAndSetCart,
  removeProductFromCart,
  setCart,
}
