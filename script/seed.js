'use strict'

const db = require('../server/db')
const {User, Order, Game, Cart, PmtProfile} = require('../server/db/models')
const seedGames = require('./seedGames')
const seedProfiles = require('./seedProfiles')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'jackie@retrospective.com', password: '123'}),
    User.create({email: 'raghdaa@retrospective.com', password: '123'}),
    User.create({email: 'karolina@retrospective.com', password: '123'}),
    User.create({email: 'katie@retrospective.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users successfully`)

  const games = await Promise.all(
    seedGames.map(game => {
      return Game.create(game)
    })
  )

  const pmtprofiles = await Promise.all(
    seedProfiles.map(profile => {
      return PmtProfile.create(profile)
    })
  )

  const orders = await Promise.all([
    Order.create({
      items: [games[0], games[4]],
      userId: 1
    }),
    Order.create({
      items: [games[5], games[3]],
      userId: 2
    })
  ])

  //dummy carts
  const cart = await Promise.all([
    users[0].addGame(games[0]),
    users[0].addGame(games[3]),
    users[0].addGame(games[6]),
    users[2].addGame(games[0]),
    users[3].addGame(games[3]),
    users[5].addGame(games[6]),
    users[1].addGame(games[0]),
    users[4].addGame(games[3]),
    users[1].addGame(games[6])
  ])

  const jackiesCart = await Cart.findOne({
    where: {
      userId: 3
    }
  })

  const raghdaasCart = await Cart.findOne({
    where: {
      userId: 4
    }
  })

  const karolinasCart = await Cart.findOne({
    where: {
      userId: 5
    }
  })

  const katiesCart = await Cart.findOne({
    where: {
      userId: 6
    }
  })

  await raghdaasCart.addItem()
  await raghdaasCart.addItem()
  await katiesCart.addItem()

  console.log(`seeded ${orders.length} orders successfully`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
