const CART_KEY = 'cart'

class LocalStorageService {
  setCart (cart) {
    localStorage.setItem(CART_KEY, cart)
  }

  getCart () {
    localStorage.getItem(CART_KEY)
  }
}

export default new LocalStorageService()
