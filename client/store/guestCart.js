const GET_LOCAL_CART = 'GET_LOCAL_CART'

//action creator
const gotCart = localCart => {
  return {
    type: GET_LOCAL_CART,
    localCart
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

//reducer
export default function guestCartReducer(state = {}, action) {
  switch (action.type) {
    case GET_LOCAL_CART:
      return action.localCart
    default:
      return state
  }
}
