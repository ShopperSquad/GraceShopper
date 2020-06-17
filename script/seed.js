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
    }),
    Game.create({
      name: 'Pokemon Yellow',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/pt/4/43/Pok%C3%A9mon_Yellow_cover.png',
      yearOfRelease: 1998
    }),
    Game.create({
      name: "Gargoyle's Quest",
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Gargoyles_Quest.jpg/220px-Gargoyles_Quest.jpg',
      yearOfRelease: 1990
    }),
    Game.create({
      name: 'Dr. Mario',
      imageUrl: 'https://pbs.twimg.com/media/EOeUdt4W4AEqh-t.png',
      yearOfRelease: 1990
    }),
    Game.create({
      name: 'Final Fantasy Adventure',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Final_Fantasy_Adventure_Front_Cover.jpg/220px-Final_Fantasy_Adventure_Front_Cover.jpg',
      yearOfRelease: 1991
    }),
    Game.create({
      name: 'Yoshi',
      imageUrl:
        'https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/237642.jpg',
      yearOfRelease: 1991
    }),
    Game.create({
      name: "Kirby's Dream Land",
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Final_Fantasy_Adventure_Front_Cover.jpg/220px-Final_Fantasy_Adventure_Front_Cover.jpg',
      yearOfRelease: 1991
    }),
    Game.create({
      name: "The Legend of Zelda: Link's Awakening",
      imageUrl:
        'https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/a/ac/LA_Original_Soundtrack_Game_Boy_Cover.jpg/1200px-LA_Original_Soundtrack_Game_Boy_Cover.jpg',
      yearOfRelease: 1993
    }),
    Game.create({
      name: 'Donkey Kong Land',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/8/8c/Donkey_Kong_Land_Coverart.png',
      yearOfRelease: 1995
    }),
    Game.create({
      name: 'Teenage Mutant Ninja Turtles III: Radical Rescue',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/f/fd/Teenage_Mutant_Ninja_Turtles_III_-_Radical_Rescue_Coverart.png',
      yearOfRelease: 1993
    })
  ])

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
