const GET_LOCAL_CART = 'GET_LOCAL_CART'
const REMOVE_GUEST_CART_ITEM = 'REMOVE_GUEST_CART_ITEM'
const ADD_GAME_TO_GUEST_CART = 'ADD_GAME_TO_GUEST_CART'
const UPDATE_ITEM_QUANT_GUEST_CART = 'UPDATE_ITEM_QUANT_GUEST_CART'
const CHECKOUT_GUEST = 'CHECKOUT_GUEST'

//action creator
const gotCart = localCart => {
  return {
    type: GET_LOCAL_CART,
    localCart
  }
}

const removedItem = cart => {
  return {
    type: REMOVE_GUEST_CART_ITEM,
    cart
  }
}

const addedGame = increasedCart => {
  return {
    type: ADD_GAME_TO_GUEST_CART,
    increasedCart
  }
}

const updatedItem = quantCart => {
  return {
    type: UPDATE_ITEM_QUANT_GUEST_CART,
    quantCart
  }
}

const checkedOutGuest = cart => {
  return {
    type: CHECKOUT_GUEST,
    cart
  }
}

//thunk
export const getLocalCart = () => {
  return dispatch => {
    let cart = localStorage.getItem('RSGC')
    cart = cart ? JSON.parse(cart) : {}
    dispatch(gotCart(cart))
    localStorage.setItem('RSGC', JSON.stringify(cart))
  }
}

export const removeCartItem = id => {
  return dispatch => {
    let cart = localStorage.getItem('RSGC')
    cart = JSON.parse(cart)

    delete cart[id]
    dispatch(removedItem(cart))
    localStorage.setItem('RSGC', JSON.stringify(cart))
  }
}

export const addGame = game => {
  return dispatch => {
    if (!game.cartQuant) {
      game.cartQuant = 1
    }

    let cart = localStorage.getItem('RSGC')
    cart = JSON.parse(cart)

    cart[game.id] = game
    dispatch(addedGame(cart))
    localStorage.setItem('RSGC', JSON.stringify(cart))
  }
}

export const updateGuestItemQuant = (value, id) => {
  return dispatch => {
    let cart = localStorage.getItem('RSGC')
    cart = JSON.parse(cart)

    cart[id].cartQuant = parseInt(value, 10)
    dispatch(updatedItem(cart))
    localStorage.setItem('RSGC', JSON.stringify(cart))
  }
}

export const checkoutGuest = () => {
  return dispatch => {
    const emptyCart = {}
    dispatch(checkedOutGuest(emptyCart))
    localStorage.setItem('RSGC', JSON.stringify(emptyCart))
  }
}

//reducer
export default function guestCartReducer(state = {}, action) {
  switch (action.type) {
    case GET_LOCAL_CART:
      return action.localCart
    case REMOVE_GUEST_CART_ITEM:
      return action.cart
    case ADD_GAME_TO_GUEST_CART:
      return action.increasedCart
    case UPDATE_ITEM_QUANT_GUEST_CART:
      return action.quantCart
    case CHECKOUT_GUEST:
      return action.cart
    default:
      return state
  }
}
