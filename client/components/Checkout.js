import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {checkoutUser} from '../store/user'
import {checkoutGuest} from '../store/guestCart'
import CheckOutForm from './ChekoutFormAllGuests'

export class Checkout extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    if (this.props.isLoggedIn === true) {
      this.props.checkoutLoggedInUser()
    } else {
      this.props.checkoutGuestUser()
    }
    this.props.history.push('/confirmation')
  }

  render() {
    return (
      <CheckOutForm
        isLoggedIn={this.props.isLoggedIn}
        handleSubmit={this.handleSubmit}
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
