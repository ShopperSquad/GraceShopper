import React from 'react'

function addToStorage(id, game) {
  let storageObj = localStorage.getItem('RSGC')

  storageObj = storageObj ? JSON.parse(storageObj) : {}

  storageObj[game.id] = game

  localStorage.setItem('RSGC', JSON.stringify(storageObj))
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
