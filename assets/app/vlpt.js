import 'vlpt.scss'
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from 'redux/store'

import {
  CartTopbar,
  ProductList
} from 'view/components'

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <CartTopbar />
      <ProductList />
    </React.Fragment>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('vlpt-app'))
