const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

Cart.prototype.changeQuant = async function(val) {
  this.quantity = val
  await this.save()
}

Cart.prototype.addItem = async function() {
  this.quantity = this.quantity + 1
  await this.save()
}

Cart.prototype.removeItem = async function() {
  this.quantity = this.quantity - 1
  await this.save()
}

module.exports = Cart
