import React from 'react'

export class GuestCart extends React.Component {
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
        </table>
      </div>
    )
  }
}
