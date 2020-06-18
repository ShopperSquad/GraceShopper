import React from 'react'
import {connect} from 'react-redux'
import {CartProductCard} from './CartProductCard'
import {removeItemFromCart} from '../store/user'

export class myCart extends React.Component {
  constructor() {
    super()
    this.removeCartItem = this.removeCartItem.bind(this)
  }

  removeCartItem(gameId) {
    this.props.removeItem(gameId)
  }

  render() {
    return (
      <div>
        <h1>My Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {!this.props.cartItems.length ? (
              <tr>
                <td>There are no items in this cart</td>
              </tr>
            ) : (
              this.props.cartItems.map(game => {
                return (
                  <CartProductCard
                    key={game.id}
                    game={game}
                    removeItem={this.removeCartItem}
                  />
                )
              })
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.user.games
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: gameId => dispatch(removeItemFromCart(gameId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(myCart)
