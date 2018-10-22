import { createSelector } from 'reselect'

const getCart = ({ cart }) => cart.cart
const getCartState = createSelector([ getCart ], (cart) => cart)

export default {
  getCartState
}
