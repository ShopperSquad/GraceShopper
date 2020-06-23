/* global describe beforeEach it */

import AllProducts from './allProducts'
import ProductCard from './productCard'
import SingleProduct from './singleProduct'
import AddGame from './addGame'

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
const adapter = new Adapter()
enzyme.configure({adapter})

//models
const db = require('../../server/db')
const Game = db.model('game')

//redux
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)
import {Provider} from 'react-redux'
import {createSore} from 'redux'

import User from './userCard'

describe('React components', () => {
  describe('Product Card components', () => {
    let productData, productWrapper
    beforeEach('Create <ProductCard /> wrapper', () => {
      productData = {
        name: 'Kirby',
        price: 1099
      }
      productWrapper = shallow(<ProductCard product={productData} />)
    })

    it("includes the product's name", () => {
      expect(
        productWrapper
          .find('p')
          .text()
          .trim()
      ).to.be.equal('Kirby')
    })

    it("includes the product's price", () => {
      expect(
        productWrapper
          .find('h5')
          .text()
          .trim()
      ).to.be.equal('$10.99')
    })
  })

  describe('User card components', () => {
    let userData, userCardWrapper

    beforeEach('Create <UserCard /> wrapper', () => {
      userData = {
        id: 1,
        email: 'cody@email.com',
        admin: true
      }
      userCardWrapper = shallow(<User user={userData} />)
    })

    it('renders an <tr> element', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(userCardWrapper.find('tr').getElement()).to.exist
    })
  })
})
