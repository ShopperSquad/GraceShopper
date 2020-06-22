import React from 'react'
import {Link} from 'react-router-dom'

export const CheckoutForm = props => {
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
            <div className="form-row justify-content-around">
              {props.isLoggedIn ? (
                <Link to="/confirmation">
                  <button
                    onClick={props.checkoutLoggedIn}
                    type="button"
                    className="btn btn-primary submit-order-btn"
                  >
                    Submit Order
                  </button>
                </Link>
              ) : (
                <Link to="/confirmation">
                  <button
                    onClick={props.checkout}
                    type="button"
                    className="btn btn-primary submit-order-btn"
                  >
                    Submit Order
                  </button>
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
