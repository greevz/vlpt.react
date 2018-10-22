import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { productOperations, productSelectors } from 'redux/product'

class ReduxService {
  connect (Class) {
    const mapStateToProps = (state) => ({
      product: productSelectors.getProductState(state),
      products: productSelectors.getProductsState(state),
    })

    const mapDispachToProps = (dispatch) => bindActionCreators({
      ...productOperations,
    }, dispatch)

    return connect(mapStateToProps, mapDispachToProps)(Class)
  }
}

export default new ReduxService()
