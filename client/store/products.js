import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_PRODUCTS = 'GET_PRODUCTS'

/**
 * ACTION CREATORS
 */
const setProducts = products => ({type: SET_PRODUCTS, products})

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products')
      dispatch(setProducts(data))
    } catch (error) {
      console.log('Error fetching products!', error)
    }
  }
}

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state
  }
}

export default productsReducer
