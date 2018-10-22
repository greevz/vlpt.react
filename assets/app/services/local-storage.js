import { map } from 'lodash'
import { CartItemModel } from 'models'

const CART_KEY = 'cart'

class LocalStorageService {
  setCart (cart = []) {

    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }

  getCart () {
    const cart = localStorage.getItem(CART_KEY)

    return cart ? map(JSON.parse(cart), (cartItem) => new CartItemModel(cartItem)) : []
  }
}

export default new LocalStorageService()
