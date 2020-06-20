import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import Product from './productCard'
import Title from './title'

export class AllProducts extends React.Component {
  componentDidMount() {
    const {getProducts} = this.props
    getProducts()
  }

  render() {
    const {products} = this.props
    return (
      <div className="container py-5">
        <Title />
        <div className="row row-cols-2">
          <div className="col">
            {products && products.length
              ? products.map(product => {
                  return <Product product={product} key={product.id} />
                })
              : 'No products'}
          </div>
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
