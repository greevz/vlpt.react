import { createSelector } from 'reselect'

const getProducts = ({ product }) => product.products
const getProductsState = createSelector([ getProducts ], (products) => products)

export default {
  getProductsState
}
