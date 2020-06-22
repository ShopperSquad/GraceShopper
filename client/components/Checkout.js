import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <h1>Checkout Page</h1>
        <Link to="/confirmation">
          <button type="button" id="submit-order-btn">
            Submit Order
          </button>
        </Link>
      </div>
    )
  }
}
