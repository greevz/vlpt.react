import { map } from 'lodash'
import { ProductModel } from 'models'

const mockProducts = [{
  name: 'Sledgehammer',
  price: 125.75
}, {
  name: 'Axe',
  price: 190.50
}, {
  name: 'Bandsaw',
  price: 562.13
}, {
  name: 'Chisel',
  price: 12.9
}, {
  name: 'Hacksaw',
  price: 18.45
}]

class ProductResource {
  queryProducts () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(map(mockProducts, (mockProduct) => new ProductModel(mockProduct)))
      }, 1500)
    })
  }
}

export default new ProductResource()
