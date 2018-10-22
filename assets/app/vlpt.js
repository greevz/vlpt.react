import 'vlpt.scss'
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from 'redux/store'

import {
  ProductList
} from 'view/pages'

const App = () => (
  <Provider store={store}>
    <ProductList />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('phtt-app'))
