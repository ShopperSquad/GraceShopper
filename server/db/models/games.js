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
    defaultValue:
      'https://cdn.shopify.com/s/files/1/1810/1427/products/3vf15fukuos_900x.jpg?v=1582131666'
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
    type: Sequelize.ENUM(
      'NES',
      'Sega Genesis',
      'Game Boy',
      'SNES',
      'Playstation'
    )
  }
})

//helper function to convert input price in dollars to integer price in cents
Game.prototype.dollarsToPennies = async function(priceInDollars) {
  this.price = priceInDollars * 100
  await this.save()
}

Game.prototype.penniesToDollars = async function() {
  this.price = this.price / 100
  await this.save()
}

module.exports = Game
