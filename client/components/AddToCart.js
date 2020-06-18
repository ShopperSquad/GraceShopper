import React from 'react'

function addToStorage(id, game) {
  game = JSON.stringify(game)
  localStorage.setItem(id, game)
}

export const AddToCart = props => {
  const game = props.singleGame
  const storageId = `RSGC${game.id}`
  return !props.isLoggedIn ? (
    <button type="button" onClick={() => addToStorage(storageId, game)}>
      Add To Cart
    </button>
  ) : (
    <button type="button">LoggedIn Btn</button>
  )
}
