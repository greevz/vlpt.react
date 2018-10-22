import { combineReducers } from 'redux'

import cart from './cart'
import dropdown from './dropdown'
import product from './product'

const rootReducer = combineReducers({
  cart,
  dropdown,
  product,
})

export default rootReducer
