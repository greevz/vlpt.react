import types from './types'

const setProduct = (product) => ({
  type: types.SET_PRODUCT,
  product
})

const setProducts = (products) => ({
  type: types.SET_PRODUCTS,
  products
})

export default {
  setProduct,
  setProducts
}
