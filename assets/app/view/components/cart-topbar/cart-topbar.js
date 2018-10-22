import React from 'react'
import PropTypes from 'prop-types'

import { reduxService } from 'services'

class CartTopbar extends React.Component {
  static propTypes = {
    cart: PropTypes.array.isRequired,
    fetchAndSetCart: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount = async () => {
    const { fetchAndSetCart } = this.props

    await fetchAndSetCart()

    this.setState({ loading: false })
  }

  render () {
    const { cart } = this.props
    const { loading } = this.state

    console.log(cart)

    return (
      <div className='cart-topbar'>
        <div className='cart-topbar-wrap'>
          {loading
            ? 'Loading'
            : <React.Fragment>
              {cart.length}
            </React.Fragment>
          }
        </div>
      </div>
    )
  }
}

export default reduxService.connect(CartTopbar)
