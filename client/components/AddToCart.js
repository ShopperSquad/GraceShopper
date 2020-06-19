import React from 'react'

export const AddToCart = props => {
  const game = props.singleGame
  return !props.isLoggedIn ? (
    <button type="button" onClick={() => props.addToStorage(game)}>
      Add To Cart
    </button>
  ) : (
    <button type="button">LoggedIn Btn</button>
  )
}
