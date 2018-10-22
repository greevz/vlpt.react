import actions from './actions'
import { productResource } from 'resources'

const setProduct = actions.setProduct

const setProducts = actions.setProducts

const fetchAndSetProducts = () => async (dispatch) => {
  const products = await productResource.queryProducts()

  await dispatch(setProducts(products))

  return products
}

export default {
  fetchAndSetProducts,
  setProduct,
  setProducts,
}
