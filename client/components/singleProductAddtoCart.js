import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {AddToCart} from './AddToCart'
import {addGame} from '../store/guestCart'
import {addToLoggedInCart} from '../store/user'

class singleProductAddtoCart extends Component {
  constructor() {
    super()

    this.addToStorage = this.addToStorage.bind(this)
    this.addNewGame = this.addNewGame.bind(this)
  }

  addNewGame(gameId) {
    this.props.addGameToLoggedInCart(gameId)
  }

  addToStorage(game) {
    this.props.addGameToStorage(game)
  }

  render() {
    const arr = this.props.singleProduct
    return (
      <div>
        <AddToCart
          singleGame={arr}
          isLoggedIn={this.props.isLoggedIn}
          addToStorage={this.addToStorage}
          addNewGame={this.addNewGame}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    addGameToStorage: gameObj => dispatch(addGame(gameObj)),
    addGameToLoggedInCart: id => dispatch(addToLoggedInCart(id))
  }
}

export default connect(mapState, mapDispatch)(singleProductAddtoCart)

singleProductAddtoCart.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
