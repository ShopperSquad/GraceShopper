import axios from 'axios'

/**
 * ACTION TYPES
 */
export const SET_PRODUCTS = 'GET_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'

/**
 * ACTION CREATORS
 */
export const setProducts = products => ({type: SET_PRODUCTS, products})

export const addProduct = product => ({type: ADD_PRODUCT, product})

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

export const addSingleProduct = product => {
  return async dispatch => {
    try {
      const {data} = await axios.post(
        '/api/products/add-inventory-game',
        product
      )
      dispatch(addProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    case ADD_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}

export default productsReducer
