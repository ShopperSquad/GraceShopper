const router = require('express').Router()
const {Game, Console} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const games = await Game.findAll()
    const consoles = await Console.findAll()
    res.json([...games, ...consoles])
  } catch (err) {
    next(err)
  }
})

router.get('/games', async (req, res, next) => {
  try {
    const games = await Game.findAll()
    res.json(games)
  } catch (error) {
    next(error)
  }
})

router.get('/consoles', async (req, res, next) => {
  try {
    const consoles = await Console.findAll()
    res.json(consoles)
  } catch (error) {
    next(error)
  }
})
