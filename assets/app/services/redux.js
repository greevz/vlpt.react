import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { cartOperations, cartSelectors } from 'redux/cart'
import { productOperations, productSelectors } from 'redux/product'

class ReduxService {
  connect (Class) {
    const mapStateToProps = (state) => ({
      cart: cartSelectors.getCartState(state),
      products: productSelectors.getProductsState(state),
    })

    const mapDispachToProps = (dispatch) => bindActionCreators({
      ...cartOperations,
      ...productOperations,
    }, dispatch)

    return connect(mapStateToProps, mapDispachToProps)(Class)
  }
}

export default new ReduxService()
