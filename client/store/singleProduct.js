import Axios from 'axios'

//action type
const SELECT_PRODUCT = 'SELECT_PRODUCT'
//action creator
const selectedProduct = product => ({
  type: SELECT_PRODUCT,
  product
})
//thunk
export const fetchSingleProduct = id => async dispatch => {
  try {
    const {data} = await Axios.get(`/api/products/${id}`)
    dispatch(selectedProduct(data))
  } catch (error) {
    console.log(error)
  }
}
//reducer
export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case SELECT_PRODUCT:
      return action.product
    default:
      return state
  }
}
