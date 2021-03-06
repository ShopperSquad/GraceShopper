const User = require('./user')
const Game = require('./games')
const Order = require('./orders')
const Cart = require('./carts')
const PmtProfile = require('./pmtprofile')
const Sequelize = require('sequelize')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Game.belongsToMany(User, {through: 'cart'})
User.belongsToMany(Game, {through: 'cart'})
User.hasOne(Cart)
User.hasMany(Order)
User.hasMany(PmtProfile)
PmtProfile.belongsTo(User)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Game,
  Order,
  Cart,
  PmtProfile
}
