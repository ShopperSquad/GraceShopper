import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchSingleProduct, resetProduct} from '../store/singleProduct'
import {deleteProduct} from '../store/products'
import {AddToCart} from './AddToCart'
import {addGame} from '../store/guestCart'
import {addToLoggedInCart} from '../store/user'
import UpdateGame from './updateGame'

class singleProduct extends Component {
  constructor() {
    super()

    this.addToStorage = this.addToStorage.bind(this)
    this.addNewGame = this.addNewGame.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  componentDidMount() {
    const {getSingleProduct} = this.props
    getSingleProduct(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.resetView()
  }

  addNewGame(gameId) {
    this.props.addGameToLoggedInCart(gameId)
    this.props.history.push('/my-cart')
  }

  addToStorage(game) {
    this.props.addGameToStorage(game)
    this.props.history.push('/cart')
  }

  handleOnClick() {
    const {removeProduct} = this.props
    removeProduct(this.props.singleProduct)
    this.props.history.push('/')
  }

  render() {
    const arr = this.props.singleProduct
    const {isAdmin} = this.props
    return (
      <div className="single-game-form">
        <div className="single-game-form-comp">
          <div key={arr.id} className="container py-2">
            <div className="col-10 text-black my-5">
              <h1>{arr.name}</h1>
            </div>

            <div className="col-10 col-md-6 my-3">
              <img src={arr.imageUrl} className="img-fluid" alt={arr.name} />
            </div>

            <div className="col-10 col-md-6 my-3 text-capitalize">
              <h4 className="text-black">
                <strong>
                  {' '}
                  Price : <span>$</span> {arr.price / 100}{' '}
                </strong>
              </h4>
              <p className="text-capitalize font-weight-bold mt-3 mb-0">
                <span className="text-black lead text-muted">
                  {arr.description}
                </span>
              </p>
              <h5 className="text-title  mt-3 mb-2">
                Console : <span className="text-uppercase">{arr.console}</span>
              </h5>
              <h6 className="text-capitalize font-weight-bold mt-3 mb-0">
                Quantity :{' '}
                <span className="text-black lead text-muted">
                  {arr.quantity}
                </span>
              </h6>
              <h6 className="text-capitalize font-weight-bold mt-3 mb-0">
                Year of Release :{' '}
                <span className="text-black lead text-mu">
                  {arr.yearOfRelease}
                </span>
              </h6>
            </div>

            <div>
              <AddToCart
                singleGame={arr}
                isLoggedIn={this.props.isLoggedIn}
                addToStorage={this.addToStorage}
                addNewGame={this.addNewGame}
              />
            </div>
          </div>
        </div>

        {isAdmin ? (
          <div className="single-game-form-comp">
            <div className="game-form-box">
              <div>
                <h2>You are an Admin.</h2>
                <p>
                  To remove this from store: &nbsp;{' '}
                  <button type="button" onClick={this.handleOnClick}>
                    Remove
                  </button>{' '}
                </p>
              </div>
              <UpdateGame
                id={this.props.match.params.id}
                products={arr.products}
                singleProduct={arr}
              />
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleProduct: state.singleProduct,
    isAdmin: state.user.admin,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProduct: id => dispatch(fetchSingleProduct(id)),
    removeProduct: id => dispatch(deleteProduct(id)),
    addGameToStorage: gameObj => dispatch(addGame(gameObj)),
    addGameToLoggedInCart: id => dispatch(addToLoggedInCart(id)),
    resetView: () => dispatch(resetProduct())
  }
}

export default connect(mapState, mapDispatch)(singleProduct)

singleProduct.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
