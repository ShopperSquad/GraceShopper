const GET_LOCAL_CART = 'GET_LOCAL_CART'
const REMOVE_GUEST_CART_ITEM = 'REMOVE_GUEST_CART_ITEM'

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
    console.log(cart)
    dispatch(removedItem(cart))
    localStorage.setItem('RSGC', JSON.stringify(cart))
  }
}

//reducer
export default function guestCartReducer(state = {}, action) {
  switch (action.type) {
    case GET_LOCAL_CART:
      return action.localCart
    case REMOVE_GUEST_CART_ITEM:
      return action.cart
    default:
      return state
  }
}
