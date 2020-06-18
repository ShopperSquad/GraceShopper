/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Game = db.model('game')
const Order = db.model('order')

//Need to adjust for games and consoles. Disregard if it still says Users
describe('Games model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('validations', () => {
    it('requires name and price', async () => {
      const game = Game.build()
      try {
        await game.validate()
        throw new Error('Promise should have rejected')
      } catch (err) {
        expect(err).to.be.an('error')
        expect(err.errors[0]).to.contain({
          type: 'notNull Violation',
          path: 'name'
        })
        expect(err.errors[1]).to.contain({
          type: 'notNull Violation',
          path: 'price'
        })
      }
    })
  })
})

describe('Orders model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('order contents', () => {
    it('cannot be an empty array', async () => {
      const order = Order.build()
      try {
        await order.validate()
        throw new Error('Promise should have rejected')
      } catch (err) {
        expect(err).to.be.an('error')
        expect(err.errors[0]).to.contain({
          type: 'notNull Violation',
          path: 'items'
        })
      }
    })
  })
})
