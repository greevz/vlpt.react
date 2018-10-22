import { map } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

import { reduxService } from 'services'

import { LoadingPage, Section } from 'view/components'

class ProductListPage extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    fetchAndSetProducts: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount = async () => {
    const { fetchAndSetProducts } = this.props

    await fetchAndSetProducts()

    this.setState({ loading: false })
  }

  render () {
    const { products } = this.props
    const { loading } = this.state

    return (
      <LoadingPage loading={loading}>
        <Section>
          <h1>Products</h1>

          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {map(products, (product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.getDisplayPrice()}</td>
                  <td className='td--tight'>
                    <a className='link' href='javascript:void(0)' onClick={this.onAddProductClick}>
                      Add Product
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </LoadingPage>
    )
  }
}

export default reduxService.connect(ProductListPage)
