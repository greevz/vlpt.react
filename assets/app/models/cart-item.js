export default class CartItemModel {
  constructor (config = {}) {
    this.product = config.product
    this.quantity = config.quantity
  }

  serialise () {
    return {
      product: this.product.serialise(),
      quantity: this.quantity
    }
  }
}
