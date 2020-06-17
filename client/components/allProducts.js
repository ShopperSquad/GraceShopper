import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import Product from './productCard'

export class AllProducts extends React.Component {
  componentDidMount() {
    const {getProducts} = this.props
    getProducts()
  }

  render() {
    const {products} = this.props
    return (
      <div className="row">
        <div className="col s6">
          {products && products.length
            ? products.map(product => {
                return <Product product={product} key={product.id} />
              })
            : 'No products'}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
