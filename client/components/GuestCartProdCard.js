import React from 'react'

export const GuestCartProductCard = props => {
  return (
    <tr>
      <td>
        <img src={props.game.imageUrl} className="cart-img" />
      </td>
      <td id="cart-prod-details">{props.game.name}</td>
      <td className="cart-prod-price">${props.game.price / 100}</td>
      <td className="cart-prod-quant">
        <input
          type="number"
          name="cart-quant"
          defaultValue={props.game.cartQuant}
          min="1"
          onChange={e => props.handleChange(e, props.game.id)}
        />
      </td>
      <td className="cart-prod-price">
        ${props.game.price * props.game.cartQuant / 100 ||
          props.game.price / 100}
      </td>
      <td>
        <button
          type="button"
          className="cart-item-rmv"
          onClick={() => props.removeItem(props.game.id)}
        >
          Remove
        </button>
      </td>
    </tr>
  )
}
