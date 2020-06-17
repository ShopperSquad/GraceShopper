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
    type: Sequelize.DECIMAL
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/joystick.png'
  },
  yearOfRelease: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },

  console: {
    type: Sequelize.ENUM('Game Boy', 'SNES', 'NES', 'Sega Genesis', 'Game Gear')
  }
})

module.exports = Game
