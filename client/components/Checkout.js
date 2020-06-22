import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {checkoutUser} from '../store/user'
import {checkoutGuest} from '../store/guestCart'

export class Checkout extends Component {
  constructor() {
    super()
    this.checkoutLoggedIn = this.checkoutLoggedIn.bind(this)
    this.checkout = this.checkout.bind(this)
  }

  checkoutLoggedIn() {
    this.props.checkoutLoggedInUser()
  }

  checkout() {
    this.props.checkoutGuestUser()
  }

  render() {
    return (
      <div>
        <h1>Checkout Page</h1>
        {this.props.isLoggedIn ? (
          <Link to="/confirmation">
            <button
              onClick={this.checkoutLoggedIn}
              type="button"
              id="submit-order-btn"
            >
              Submit Order
            </button>
          </Link>
        ) : (
          <Link to="/confirmation">
            <button onClick={this.checkout} type="button" id="submit-order-btn">
              Submit Order
            </button>
          </Link>
        )}
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
    checkoutLoggedInUser: () => dispatch(checkoutUser()),
    checkoutGuestUser: () => dispatch(checkoutGuest())
  }
}

export default connect(mapState, mapDispatch)(Checkout)

Checkout.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
