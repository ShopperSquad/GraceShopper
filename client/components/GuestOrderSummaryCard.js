import React from 'react'
import {Link} from 'react-router-dom'

export const GuestOrderSummaryCard = props => {
  return (
    <table id="order-summary">
      <thead>
        <tr>
          <th>
            <h2>Order Summary</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="order-sum-total">
          <td>Order Total</td>
          <td>
            ${props.cartItems.reduce((acc, curr) => {
              let itemTotal = curr.price * curr.cartQuant
              return acc + itemTotal
            }, 0) / 100}
          </td>
        </tr>
        <tr>
          <td>
            <Link to="/checkout">
              <button id="checkout-btn" type="button">
                Checkout
              </button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
