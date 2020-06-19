import React from 'react'
import {connect} from 'react-redux'
import {GuestCartProductCard} from './GuestCartProdCard'
import {
  getLocalCart,
  removeCartItem,
  updateGuestItemQuant
} from '../store/guestCart'
import {GuestOrderSummaryCard} from './GuestOrderSummaryCard'

export class GuestCart extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  componentDidMount() {
    this.props.getGuestCart()
  }

  removeItem(id) {
    this.props.removeItemFromCart(id)
  }

  handleChange(event, id) {
    this.props.changeCartQuant(event.target.value, id)
  }

  render() {
    return (
      <div>
        <h1>Guest Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(this.props.guestCart).map(game => {
              return (
                <GuestCartProductCard
                  key={game.id}
                  game={game}
                  handleChange={this.handleChange}
                  removeItem={this.removeItem}
                />
              )
            })}
          </tbody>
        </table>
        <GuestOrderSummaryCard
          cartItems={Object.values(this.props.guestCart)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    guestCart: state.guestCart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGuestCart: () => dispatch(getLocalCart()),
    removeItemFromCart: id => dispatch(removeCartItem(id)),
    changeCartQuant: (val, id) => dispatch(updateGuestItemQuant(val, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestCart)
