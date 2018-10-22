import './cart-topbar.scss'

import { forEach, map } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { reduxService } from 'services'

import {
  Dropdown,
  DropdownContent,
  DropdownToggle,
} from 'view/components'

class CartTopbar extends React.Component {
  static propTypes = {
    cart: PropTypes.array.isRequired,
    fetchAndSetCart: PropTypes.func.isRequired,
    removeProductFromCart: PropTypes.func.isRequired,
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

  getItemQuantity = () => {
    const { cart } = this.props
    let totalQuantity = 0

    forEach(cart, ({ quantity }) => {
      totalQuantity += quantity
    })

    return totalQuantity
  }

  getCartTotal = () => {
    const { cart } = this.props
    let totalPrice = 0

    forEach(cart, ({ product, quantity }) => {
      totalPrice += (product.price * quantity)
    })

    return numeral(totalPrice).format('$0,0.00')

  }

  onRemoveClick = (product) => {
    const { removeProductFromCart } = this.props

    removeProductFromCart(product)
  }

  render () {
    const { cart } = this.props
    const { loading } = this.state

    return (
      <div className='cart-topbar'>
        <div className='cart-topbar-wrap'>
          {loading
            ? 'Loading...'
            : <React.Fragment>
              <DropdownToggle dropdownId='cart'>My Cart ({this.getItemQuantity()})</DropdownToggle>
              <Dropdown id='cart'>
                {cart.length
                  ? <React.Fragment>
                    {map(cart, (cartItem, index) => (
                      <DropdownContent key={index} secondary={Boolean(index % 2)}>
                        {cartItem.product.name} | {cartItem.product.getDisplayPrice()} | {cartItem.quantity} | {cartItem.getDisplayTotal()}
                        <a className='link' href='javascript:void(0)' onClick={() => this.onRemoveClick(cartItem.product)}>Remove</a>
                      </DropdownContent>
                    ))}
                    <DropdownContent>
                      <strong className='cart-topbar-total'>
                        <div>Total</div>
                        <div>{this.getCartTotal()}</div>
                      </strong>
                    </DropdownContent>
                  </React.Fragment>
                  : <DropdownContent>No products in cart</DropdownContent>
                }
              </Dropdown>
            </React.Fragment>
          }
        </div>
      </div>
    )
  }
}

export default reduxService.connect(CartTopbar)
