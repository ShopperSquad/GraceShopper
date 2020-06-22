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
        <div className="container">
          <div className="row justify-content-around">
            <form className="order-form col-lg-8">
              <h2>Shipping Address</h2>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputFirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    name="first-name"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputlastName"
                    name="last-name"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="inputAddress1">Address 1</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress1"
                    name="address1"
                    placeholder="Address 1"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    name="address2"
                    placeholder="Address 2"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    name="city"
                    placeholder="City"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputState"
                    name="state"
                    placeholder="State"
                  />
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZip"
                    name="zip"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <h2 id="billing-header">Billing Details</h2>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="cardName">Cardholder Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardName"
                    name="cardName"
                    placeholder="Cardholder Name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="Card Number"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="cardExpDate">Expiration Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardExpDate"
                    name="cardExpDate"
                    placeholder="Exp. Date"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="securityNum">Security #</label>
                  <input
                    type="text"
                    className="form-control"
                    id="securityNum"
                    name="securityNum"
                    placeholder="Security Number"
                  />
                </div>
              </div>
            </form>
            <div className="col-lg-3">
              <div className="order-summary container">
                <div className="row">
                  <h2>Order Summary</h2>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <h3>Total</h3>
                  </div>
                  <div className="col-md-4">
                    <h3>$100</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
