const router = require('express').Router()
const {Game} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const games = await Game.findAll()
    res.json(games)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const game = await Game.findByPk(req.params.id)
    if (game) {
      res.json(game)
    } else res.sendStatus(404)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const game = await Game.create(req.body)
    res.status(201).json(game)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Game.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const [numAffected, affected] = await Game.update(req.body, {
      where: {id: req.params.id},
      returning: true,
      plain: true
    })
    if (affected) {
      res.status(201).json(affected)
    } else res.sendStatus(404)
  } catch (error) {
    next(error)
  }
})

module.exports = router
