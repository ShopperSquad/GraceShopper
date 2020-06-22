/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Game = db.model('game')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  let game

  beforeEach(async () => {
    const creatingGames = [
      {
        name: 'Kirby',
        price: '1099'
      },
      {
        name: 'Kirby Dream Land',
        price: '999'
      },
      {
        name: 'Castlevania',
        price: '3999'
      }
    ].map(data => Game.create(data))

    const createdGames = await Promise.all(creatingGames)
    game = createdGames[1]
  })

  describe('/api/products/', () => {
    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('Kirby')
    })
  })

  describe('GET /products/:id', () => {
    it('returns the JSON of the game based on the id', async () => {
      const res = await request(app)
        .get('/api/products/' + game.id)
        .expect(200)

      if (typeof res.body === 'string') {
        res.body = JSON.parse(res.body)
      }
      expect(res.body.name).to.equal('Kirby Dream Land')
    })
  })
})
