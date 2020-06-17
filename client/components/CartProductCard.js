import React from 'react'

export const CartProductCard = props => {
  return (
    <tr>
      <td>
        <img
          src="https://img.favpng.com/10/12/1/space-invaders-video-game-pac-man-computer-icons-png-favpng-zy3vDd2cjtu7tiEqV39Hp3f28.jpg"
          className="cart-img"
        />
      </td>
      <td id="cart-prod-details">{props.game.name}</td>
      <td className="cart-prod-price">${props.game.price}</td>
      <td className="cart-prod-quant">1</td>
      <td className="cart-prod-price">$20.00</td>
      <td>
        <button type="button" className="cart-item-rmv">
          Remove
        </button>
      </td>
    </tr>
  )
}
