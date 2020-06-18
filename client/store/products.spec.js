/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

//redux
import {fetchProducts, setProducts} from './products'
// import {createStore } from 'redux'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Redux', () => {
  let store
  let mockAxios

  const products = [{name: 'Kirby'}, {name: 'Pokemon'}]

  const initialState = {products: []}

  // const newState = reducer(
  //   initialState,
  //   {
  //     type: SET_PRODUCTS,
  //     products: products
  //   }
  // )

  // const products = [
  //   { name: 'Super Mario Land 2: 6 Golden Coins',
  //   imageUrl:
  //     'https://images-na.ssl-images-amazon.com/images/I/91x1gsV0G3L._SL1500_.jpg',
  //   yearOfRelease: 1992}
  // ];

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  // describe('set/fetch products', () => {
  //   it('setProducts action creator', () => {
  //     expect(setProducts(products)).to.deep.equal({
  //       type: 'SET_PRODUCTS',
  //       products
  //     })
  //   })
  // })

  // it('returns a new state with the updated `products`', () => {
  //   expect(newState.products).to.deep.equal(products);
  // });

  // it('reduces on SET_PRODUCTS action', () => {
  //   const action = { type: 'SET_PRODUCTS', products };

  //   const prevState = store.getState();
  //   store.dispatch(action);
  //   const newState = store.getState();

  //   expect(newState.products).to.be.deep.equal(products);
  //   expect(newState.products).to.not.be.equal(prevState.products);
  // });

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
})
