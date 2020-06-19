import React from 'react'
import {connect} from 'react-redux'
import {GuestCartProductCard} from './GuestCartProdCard'
import {getLocalCart, removeCartItem} from '../store/guestCart'

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
    let storedCart = localStorage.getItem('RSGC')
    storedCart = JSON.parse(storedCart)

    storedCart[id].cartQuant = parseInt(event.target.value, 10)
    localStorage.setItem('RSGC', JSON.stringify(storedCart))
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
    removeItemFromCart: id => dispatch(removeCartItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestCart)
