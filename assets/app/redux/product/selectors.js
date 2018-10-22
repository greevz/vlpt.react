import { createSelector } from 'reselect'

const getProduct = ({ product }) => product.product
const getProductState = createSelector([ getProduct ], (product) => product)

const getProducts = ({ product }) => product.products
const getProductsState = createSelector([ getProducts ], (products) => products)

export default {
  getProductState,
  getProductsState
}
