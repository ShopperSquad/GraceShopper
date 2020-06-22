import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {checkoutUser} from '../store/user'
import {checkoutGuest} from '../store/guestCart'
import {CheckoutForm} from './checkoutForm'

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
      <CheckoutForm
        isLoggedIn={this.props.isLoggedIn}
        checkout={this.checkout}
        checkoutLoggedIn={this.checkoutLoggedIn}
      />
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
