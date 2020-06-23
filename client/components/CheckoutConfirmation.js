import React from 'react'
import {Link} from 'react-router-dom'

export const CheckoutConfirmation = () => {
  return (
    <div>
      <h1>Thank you! Your order has been submitted.</h1>
      <Link to="/">
        <button type="button">Return to Home</button>
      </Link>
    </div>
  )
}
