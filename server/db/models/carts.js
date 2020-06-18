const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

// Cart.getUserCart = async function(thisUserId) {
//   const userCart = await this.findAll({
//     where: {
//       userId: thisUserId
//     }
//   })
//   return userCart
// }

Cart.prototype.addItem = async function() {
  this.quantity = this.quantity + 1
  await this.save()
}

Cart.prototype.removeItem = async function() {
  this.quantity = this.quantity - 1
  await this.save()
}

module.exports = Cart
