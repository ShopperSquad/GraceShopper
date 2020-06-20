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

export const putProduct = (product, id) => {
  for (let key in product) {
    if (product[key] === '') {
      delete product[key]
    }
  }
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/products/${id}`, product)
      dispatch(updateProduct(data))
    } catch (error) {
      console.log('Error putting product!', error)
    }
  }
}

//reducer
export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case SELECT_PRODUCT:
      return action.product
    case UPDATE_PRODUCT:
      return action.product
    default:
      return state
  }
}
