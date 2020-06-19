/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Game = db.model('game')

xdescribe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    const game = 'Pokemon Red'

    beforeEach(() => {
      return Game.create({
        name: 'Pokemon Red'
      })
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(game)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
