import React from 'react'
import {connect} from 'react-redux'
import {CartProductCard} from './CartProductCard'

export class myCart extends React.Component {
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
            {!this.props.cartItems.length
              ? 'There are no items in this cart'
              : this.props.cartItems.map(game => {
                  return <CartProductCard key={game.id} game={game} />
                })}
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

export default connect(mapStateToProps)(myCart)
