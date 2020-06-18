const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('game', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
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

//helper function to convert input price in dollars to integer price in cents
Game.prototype.integerPrice = async function(priceInDollars) {
  this.price = priceInDollars * 100
  await this.save()
}

module.exports = Game
