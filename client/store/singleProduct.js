import Axios from 'axios'

//action type
const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

//action creator
const selectedProduct = product => ({
  type: SELECT_PRODUCT,
  product
})

const updateProduct = productUpdate => ({
  type: UPDATE_PRODUCT,
  productUpdate
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

export const updateSingleProduct = (id, productUpdate) => async dispatch => {
  try {
    const {data} = await Axios.put(`/api/products/${id}`, productUpdate)
    dispatch(updateProduct(data))
  } catch (error) {
    console.log(error)
  }
}
const initialState = {}
//reducer
export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_PRODUCT:
      return action.product
    case UPDATE_PRODUCT:
      return {...state, ...action.productUpdate}
    default:
      return state
  }
}
