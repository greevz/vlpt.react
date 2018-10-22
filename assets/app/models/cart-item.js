import { ProductModel } from 'models'
import numeral from 'numeral'

export default class CartItemModel {
  constructor (config = {}) {
    this.product = new ProductModel(config.product)
    this.quantity = config.quantity
  }

  getDisplayTotal () {
    return numeral(this.quantity * this.product.price).format('$0,0.00')
  }

  serialise () {
    return {
      product: this.product.serialise(),
      quantity: this.quantity
    }
  }
}
