import numeral from 'numeral'

export default class ProductModel {
  constructor (config = {}) {
    this.name = config.name
    this.price = config.price
  }

  getDisplayPrice () {
    return numeral(this.price).format('$0,0.00')
  }
}
