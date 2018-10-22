import types from './types'

const setProducts = (products) => ({
  type: types.SET_PRODUCTS,
  products
})

export default {
  setProducts
}
