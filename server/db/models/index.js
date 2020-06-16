const User = require('./user')
const Console = require('./consoles')
const Game = require('./games')
const Sequelize = require('sequelize')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

const gameConsole = db.define('game_console', {
  role: Sequelize.STRING
})

Game.belongsToMany(Console, {through: gameConsole})
Console.belongsToMany(Game, {through: gameConsole})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Game,
  Console
}
