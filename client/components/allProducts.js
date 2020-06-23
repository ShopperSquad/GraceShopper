import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {fetchProducts, addProduct, addSingleProduct} from '../store/products'
import Product from './productCard'
import Title from './title'
import {addToLoggedInCart} from '../store/user'
import {addGame} from '../store/guestCart'

export class AllProducts extends React.Component {
  constructor() {
    super()

    this.addNewGame = this.addNewGame.bind(this)
    this.addToStorage = this.addToStorage.bind(this)
  }

  componentDidMount() {
    const {getProducts} = this.props
    getProducts()
  }

  addNewGame(gameId) {
    this.props.addGameToLoggedInCart(gameId)
    this.props.history.push('/my-cart')
  }

  addToStorage(game) {
    this.props.addGameToStorage(game)
    this.props.history.push('/cart')
  }

  render() {
    const {products} = this.props
    return (
      <div className="container py-5">
        <Title />
        <div className="row">
          {products && products.length
            ? products.map(product => {
                return (
                  <Product
                    product={product}
                    key={product.id}
                    isLoggedIn={this.props.isLoggedIn}
                    addNewGame={this.addNewGame}
                    addToStorage={this.addToStorage}
                  />
                )
              })
            : 'No products'}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products,
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  addGameToLoggedInCart: id => dispatch(addToLoggedInCart(id)),
  addGameToStorage: gameObj => dispatch(addGame(gameObj))
})

export default connect(mapState, mapDispatch)(AllProducts)

AllProducts.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
