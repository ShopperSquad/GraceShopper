import axios from 'axios'

//action types
const SELECT_PRODUCT = 'SELECT_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

//action creators
export const selectProduct = product => ({
  type: SELECT_PRODUCT,
  product
})
export const updateProduct = product => ({
  type: UPDATE_PRODUCT,
  product
})

//thunks
export const fetchSingleProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch(selectProduct(data))
  } catch (error) {
    console.log(error)
  }
}

export const updateSingleProduct = (id, productUpdate) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/products/${id}`, productUpdate)
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
