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

  let game
  beforeEach(() => {
    game = Game.build({
      name: 'Pokemon Green',
      price: '2499',
      yearOfRelease: '1996',
      quantity: '7',
      console: 'Game Boy',
      description: 'Gotta catch them all!',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGSBpnwKM4owV2hImYzBppxxZrGIKl3svA80qzXM-A9XBTxJxm&usqp=CAU'
    })
  })

  describe('validations', () => {
    it('requires name and price', async () => {
      let game = Game.build()
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

  describe('games model definition', () => {
    it('includes `name`, `imageUrl`, `yearOfRelease`, `quantity` and `console` fields', async () => {
      const savedGame = await game.save()
      expect(savedGame.name).to.equal('Pokemon Green')
      expect(savedGame.yearOfRelease).to.equal(1996)
      expect(savedGame.quantity).to.equal(7)
      expect(savedGame.console).to.equal('Game Boy')
      expect(savedGame.description).to.equal('Gotta catch them all!')
      expect(savedGame.imageUrl).to.equal(
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGSBpnwKM4owV2hImYzBppxxZrGIKl3svA80qzXM-A9XBTxJxm&usqp=CAU'
      )
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
