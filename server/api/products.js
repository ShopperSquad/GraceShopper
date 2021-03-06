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

router.post('/add-inventory-game', async (req, res, next) => {
  try {
    if (!req.user) res.sendStatus(401)
    if (req.user.admin) {
      const newGame = await Game.create(req.body)
      res.json(newGame)
    } else res.sendStatus(401)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    if (!req.user) res.sendStatus(401)
    if (req.user.admin) {
      const [numberOfAffectedRows, affectedRows] = await Game.update(req.body, {
        where: {
          id: req.params.id
        },
        returning: true,
        plain: true
      })
      if (affectedRows) {
        res.json(affectedRows)
      } else {
        res.sendStatus(404)
      }
    } else res.sendStatus(401)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    if (!req.user) res.sendStatus(401)
    if (req.user.admin) {
      await Game.destroy({
        where: {
          id: req.params.id
        }
      })
      res.sendStatus(204)
    } else res.sendStatus(401)
  } catch (error) {
    next(error)
  }
})

module.exports = router
