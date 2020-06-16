'use strict'

const db = require('../server/db')
const {User, Order, Game} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users successfully`)

  const games = await Promise.all([
    Game.create({
      name: 'Super Mario Land 2: 6 Golden Coins',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91x1gsV0G3L._SL1500_.jpg',
      yearOfRelease: 1992
    }),
    Game.create({
      name: 'Kirby',
      imageUrl:
        'https://vignette.wikia.nocookie.net/kirby/images/2/2d/SSU_Kirby_artwork.png/revision/latest?cb=20180612173614&path-prefix=en',
      yearOfRelease: 1992
    })
  ])

  const orders = await Promise.all([
    Order.create({
      items: [...games]
    })
  ])

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
