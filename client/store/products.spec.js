/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import {
  fetchProducts,
  setProducts,
  addProduct,
  addSingleProduct,
  ADD_PRODUCT
} from './products'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Redux', () => {
  let store
  let mockAxios

  const products = [{name: 'Kirby'}, {name: 'Pokemon'}]

  const initialState = {products: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('set/fetch products', () => {
    it('setProducts action creator', () => {
      expect(setProducts(products)).to.deep.equal({
        type: 'GET_PRODUCTS',
        products
      })
    })
  })

  describe('fetchProducts', () => {
    it('eventually dispatches the GET PRODUCTS action', async () => {
      const fakeProduct = {game: 'Kirby'}
      mockAxios.onGet('/api/products').replyOnce(200, fakeProduct)
      await store.dispatch(fetchProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_PRODUCTS')
      expect(actions[0].products).to.be.deep.equal(fakeProduct)
    })
  })

  describe('add products', () => {
    const product = {name: 'Kirby', price: 1099}
    const addProductAction = addProduct(product)
    it('addProduct action creator', () => {
      expect(addProduct(product)).to.deep.equal({
        type: 'ADD_PRODUCT',
        product
      })
    })

    it('has an action creator that returns a plain old javascript', () => {
      expect(typeof addProductAction).to.equal('object')
      expect(Object.getPrototypeOf(addProductAction)).to.equal(Object.prototype)
    })

    it('creates an object with `type` of ADD_PRODUCT', () => {
      expect(addProductAction.type).to.equal(ADD_PRODUCT)
    })

    it('dispatches the ADD PRODUCT action', async () => {
      const fakeProduct = {game: 'Kirby'}
      mockAxios
        .onPost('/api/products/add-inventory-game')
        .replyOnce(200, fakeProduct)
      await store.dispatch(addSingleProduct(fakeProduct))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('ADD_PRODUCT')
      expect(actions[0].product).to.be.deep.equal(fakeProduct)
    })
  })
})
