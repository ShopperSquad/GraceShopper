const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('game', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.FLOAT
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/joystick.png'
  },
  yearOfRelease: {
    type: Sequelize.DATEONLY
  }
})

module.exports = Game
