const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  items: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  }
})

module.exports = Order
