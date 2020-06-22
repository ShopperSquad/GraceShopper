import axios from 'axios'

/**
 * ACTION TYPES
 */
export const SET_PRODUCTS = 'GET_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

/**
 * ACTION CREATORS
 */
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
})

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  product
})

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

export const postProduct = product => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/products', product)
      dispatch(addProduct(data))
    } catch (error) {
      console.log('Error posting product!', error)
    }
  }
}

export const deleteProduct = product => {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/${product.id}`)
      dispatch(removeProduct(product))
    } catch (error) {
      console.log('Error deleting product!', error)
    }
  }
}

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    case ADD_PRODUCT:
      return [...state, action.product]
    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.product.id)
    default:
      return state
  }
}

export default productsReducer
