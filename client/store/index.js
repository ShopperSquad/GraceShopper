import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import users from './users'
import products from './products'
import singleProduct from './singleProduct'
import guestCart from './guestCart'

const reducer = combineReducers({
  user,
  products,
  singleProduct,
  guestCart,
  users
})
const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware
    //createLogger({collapsed: true})
  )
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
