import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchSingleProduct, putProduct} from '../store/singleProduct'
import {deleteProduct} from '../store/products'
import {AddToCart} from './AddToCart'
import {addGame} from '../store/guestCart'
import {addToLoggedInCart} from '../store/user'

class singleProduct extends Component {
  constructor() {
    super()

    this.addToStorage = this.addToStorage.bind(this)
    this.addNewGame = this.addNewGame.bind(this)
  }

  componentDidMount() {
    const {getSingleProduct, updateProduct, removeProduct} = this.props
    getSingleProduct(this.props.match.params.id)
  }

  addNewGame(gameId) {
    this.props.addGameToLoggedInCart(gameId)
  }

  addToStorage(game) {
    this.props.addGameToStorage(game)
  }

  render() {
    const arr = this.props.singleProduct
    const {isAdmin} = this.props
    return (
      <div key={arr.id} className="container py-2">
        <div className="col-10 text-black my-5">
          <h1>{arr.name}</h1>
        </div>

        <div className="col-10 col-md-6 my-3">
          <img src={arr.imageUrl} className="img-fluid" alt="" />
        </div>

        <div className="col-10 col-md-6 my-3 text-capitalize">
          <h4 className="text-title  mt-3 mb-2">
            Console : <span className="text-uppercase">{arr.console}</span>
          </h4>
          <h4 className="text-black">
            <strong>
              {' '}
              Price : <span>$</span> {arr.price}{' '}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Description :{' '}
            <span className="text-black lead text-muted">
              {arr.description}
            </span>
          </p>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Quantity :{' '}
            <span className="text-black lead text-muted">{arr.quantity}</span>
          </p>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Year of Release :{' '}
            <span className="text-black lead text-mu">{arr.yearOfRelease}</span>
          </p>
        </div>

        <div>
          <AddToCart
            singleGame={arr}
            isLoggedIn={this.props.isLoggedIn}
            addToStorage={this.addToStorage}
            addNewGame={this.addNewGame}
          />
        </div>

        {isAdmin ? (
          <div>
            <div>
              <h2>You are an Admin.</h2>
              <p>
                To remove this from store: &nbsp; <button>Remove</button>{' '}
              </p>
              <p>You can update this product here:</p>
            </div>
            <div>Update Form</div>
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
    updateProduct: id => dispatch(putProduct(id)),
    removeProduct: id => dispatch(deleteProduct(id)),
    addGameToStorage: gameObj => dispatch(addGame(gameObj)),
    addGameToLoggedInCart: id => dispatch(addToLoggedInCart(id))
  }
}

export default connect(mapState, mapDispatch)(singleProduct)

singleProduct.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
