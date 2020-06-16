const Sequelize = require('sequelize')
const db = require('../db')

const Console = db.define('console', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
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

module.exports = Console
