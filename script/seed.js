'use strict'

const db = require('../server/db')
const {User, Order, Game, Cart} = require('../server/db/models')

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

  const games = await Promise.all([
    Game.create({
      name: 'Super Mario Land 2: 6 Golden Coins',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91x1gsV0G3L._SL1500_.jpg',
      yearOfRelease: 1992,
      description: 'Super Mario Land 2 is a great game. Two thumbs up.',
      price: 22.5,
      quantity: 14,
      console: 'Game Gear'
    }),
    Game.create({
      name: 'Kirby',
      imageUrl:
        'https://vignette.wikia.nocookie.net/kirby/images/2/2d/SSU_Kirby_artwork.png/revision/latest?cb=20180612173614&path-prefix=en',
      yearOfRelease: 1992,
      description: 'Kirby is a great game. Two thumbs up.',
      price: 50,
      quantity: 28,
      console: 'Sega Genesis'
    }),
    Game.create({
      name: 'Pokemon Yellow',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/pt/4/43/Pok%C3%A9mon_Yellow_cover.png',
      yearOfRelease: 1998,
      description: 'Pokemon Yellow is a great game. Two thumbs up.',
      price: 5,
      quantity: 101,
      console: 'NES'
    }),
    Game.create({
      name: "Gargoyle's Quest",
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Gargoyles_Quest.jpg/220px-Gargoyles_Quest.jpg',
      yearOfRelease: 1990,
      description: "Gargoyle's Quest is a great game. Two thumbs up.",
      price: 75,
      quantity: 5,
      console: 'Game Boy'
    }),
    Game.create({
      name: 'Dr. Mario',
      imageUrl: 'https://pbs.twimg.com/media/EOeUdt4W4AEqh-t.png',
      yearOfRelease: 1990,
      description: 'Dr. Mario is a great game. Two thumbs up.',
      price: 13,
      quantity: 30,
      console: 'Game Gear'
    }),
    Game.create({
      name: 'Final Fantasy Adventure',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Final_Fantasy_Adventure_Front_Cover.jpg/220px-Final_Fantasy_Adventure_Front_Cover.jpg',
      yearOfRelease: 1991,
      description: 'Final Fantasy Adventure is a great game. Two thumbs up.',
      price: 18,
      quantity: 31,
      console: 'SNES'
    }),
    Game.create({
      name: 'Yoshi',
      imageUrl:
        'https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/237642.jpg',
      yearOfRelease: 1991,
      description: 'Yoshi is a great game. Two thumbs up.',
      price: 47,
      quantity: 8,
      console: 'Sega Genesis'
    }),
    Game.create({
      name: "Kirby's Dream Land",
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Final_Fantasy_Adventure_Front_Cover.jpg/220px-Final_Fantasy_Adventure_Front_Cover.jpg',
      yearOfRelease: 1991,
      description: "Kirby's Dream Land is a great game. Two thumbs up.",
      price: 30,
      quantity: 16,
      console: 'Game Gear'
    }),
    Game.create({
      name: "The Legend of Zelda: Link's Awakening",
      imageUrl:
        'https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/a/ac/LA_Original_Soundtrack_Game_Boy_Cover.jpg/1200px-LA_Original_Soundtrack_Game_Boy_Cover.jpg',
      yearOfRelease: 1993,
      description: 'This is a great game. Two thumbs up.',
      price: 100,
      quantity: 2,
      console: 'NES'
    }),
    Game.create({
      name: 'Donkey Kong Land',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/8/8c/Donkey_Kong_Land_Coverart.png',
      yearOfRelease: 1995,
      description: 'Donkey Kong Land is a great game. Two thumbs up.',
      price: 19,
      quantity: 12,
      console: 'SNES'
    }),
    Game.create({
      name: 'Teenage Mutant Ninja Turtles III: Radical Rescue',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/f/fd/Teenage_Mutant_Ninja_Turtles_III_-_Radical_Rescue_Coverart.png',
      yearOfRelease: 1993,
      description: 'TMNT III is a great game. Two thumbs up.',
      price: 22,
      quantity: 18,
      console: 'Game Boy'
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
