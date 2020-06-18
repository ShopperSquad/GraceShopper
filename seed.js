/* categories for consoles (35+ million units sold, pre-2000)
    - NES
    - Sega Genesis
    - Game Boy
    - SNES
    - PlayStation
*/

const seed = [
  {
    name: 'Mario Bros.',
    description: '',
    price: 10,
    imageUrl: '',
    yearOfRelease: 1983,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Castlevania',
    description: 'This game was Metroid but spooky, and it was legendary.',
    price: 39.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/51/Castlevania_1_cover.png',
    yearOfRelease: 1986,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Super Mario Bros.',
    description:
      'First in the Super Mario series of platformers. Successor to the 1983 arcade game, Mario Bros.',
    price: 10.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png',
    yearOfRelease: 1985,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Super Mario Bros. 2',
    description: 'Cooperative play.',
    price: 19.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/00/Super_Mario_Bros_2.jpg',
    yearOfRelease: 1988,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Super Mario Bros. 3',
    description:
      'Arguably the best entry in the Super Mario Bros. franchise. Most iconic in the history of gaming.',
    price: 244.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/a5/Super_Mario_Bros._3_coverart.png',
    yearOfRelease: 1990,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Duck Hunt',
    description: 'Most responsive, at-home light-gun shooters',
    price: 10.99,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/14/DuckHuntBox.jpg',
    yearOfRelease: 1988,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'The Legend of Zelda',
    description:
      'It was ambitious, sprawling, decades ahead of its time, and still deeper than most video games that are released today.',
    price: 14.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png',
    yearOfRelease: 1986,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Zelda II: The Adventure of Link',
    description:
      'This sequel blazed new frontiers for the genre, making it an all-time classic.',
    price: 19.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/fd/Zelda_II_The_Adventure_of_Link_box.jpg',
    yearOfRelease: 1988,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Tetris',
    description: 'It will probably outlive us all.',
    price: 1000,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/7d/Tetris_NES_cover_art.jpg',
    yearOfRelease: 1989,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Metroid',
    description:
      'Fun space odyssey game that really made you feel like you were exploring a barren spaceland. Pioneered the metroid-mania genre.',
    price: 39.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/5d/Metroid_boxart.jpg',
    yearOfRelease: 1986,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Kung Fu',
    description: 'Stands among the best of the console.',
    price: 3.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/615epbvZ4%2BL._AC_SY741_.jpg',
    yearOfRelease: 1985,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Punch-Out!!',
    description: 'Boxing sports fighting video game.',
    price: 12.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/3d/Punch-out_mrdream_boxart.PNG',
    yearOfRelease: 1987,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Mega Man',
    description:
      'Established many of the gameplay, story, and graphical conventions that define the ensuing sequels, subseries, and spin-offs.',
    price: 119.99,
    imageUrl:
      'https://ih1.redbubble.net/image.108293369.1116/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    yearOfRelease: 1987,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Mega Man 2',
    description:
      'Best-selling Mega Man game. More than 1.5 million copies sold.',
    price: 19.99,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/be/Megaman2_box.jpg',
    yearOfRelease: 1989,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Mega Man 3',
    description: 'Pivotal moment for the franchise.',
    price: 14.99,
    imageUrl:
      'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/24279/15651/Game%20Nintendo%20NES-241-2__17813.1394712189.jpg?c=2&imbypass=on',
    yearOfRelease: 1990,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Kid Icarus',
    description: 'Greek inspired fantasy world action platformer.',
    price: 19.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/b1/Kid_Icarus_NES_box_art.png',
    yearOfRelease: 1987,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'DuckTales',
    description:
      'DuckTales introduced game mechanics still seen in titles like Shovel Knight, Dark Souls, Bloodborne, and more.',
    price: 29.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/64/DuckTales_NES_Cover.png',
    yearOfRelease: 1989,
    quantity: 100,
    console: 'NES'
  },
  {
    name: "Kirby's Adventure",
    description: 'First time Kirby ever appeared on a console game.',
    price: 26.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/ae/Kirby%27s_Adventure_Coverart.png',
    yearOfRelease: 1993,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Final Fantasy',
    description:
      "This game started the goliath RPG franchise that's still burning strong today.",
    price: 14.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/d/d8/FF1_USA_boxart.jpg',
    yearOfRelease: 1987,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Teenage Mutant Ninja Turtles',
    description: 'Single player action game. First appearance of the TMNT.',
    price: 9.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/54/Teenage_Mutant_Ninja_Turtles_%281989_video_game%29.jpg',
    yearOfRelease: 1989,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Ice Climber',
    description: 'Vertical platform video game.',
    price: 14.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/d/df/IceClimberboxartnes.jpg',
    yearOfRelease: 1985,
    quantity: 100,
    console: 'NES'
  },
  {
    name: 'Donkey Kong',
    description: 'A masterpiece of a game.',
    price: 19.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/23/Donkey_Kong_94_box_art.jpg',
    yearOfRelease: 1994,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Super Mario Land',
    description:
      'It features tiny, simple sprites. It lets Mario take on a few stages in a submarine and biplane.',
    price: 24.99,
    imageUrl:
      'https://www.mariowiki.com/images/thumb/8/8b/SarasalandBoxArt.png/250px-SarasalandBoxArt.png',
    yearOfRelease: 1989,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Super Mario Land 2: 6 Golden Coins',
    description: 'Most successful and highest rating title on Game Boy',
    price: 12.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91x1gsV0G3L._SL1500_.jpg',
    yearOfRelease: 1992,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Harvest Moon GB',
    description:
      'The systemic, schedule-based, conflict-free approach is the kind of thing you can jump into pretty much any time you want to chill out and enjoy some low-stress gaming.',
    price: 4.99,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJIWoni2SF9v7-dbLJTqXRdckCRIT_ryPvRxZLXOLdmQ3lUglx&usqp=CAU',
    yearOfRelease: 1998,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Pokemon Red',
    description: "Gotta catch 'em all!",
    price: 9.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_box_art_-_Red_Version.png',
    yearOfRelease: 1996,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Pokemon Green',
    description: "Gotta catch 'em all!",
    price: 24.99,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGSBpnwKM4owV2hImYzBppxxZrGIKl3svA80qzXM-A9XBTxJxm&usqp=CAU',
    yearOfRelease: 1996,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Pokemon Blue',
    description: "Gotta catch 'em all!",
    price: 49.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51GMKNSJ9GL.jpg',
    yearOfRelease: 1996,
    quantity: 0,
    console: 'Game Boy'
  },
  {
    name: 'Pokemon Yellow',
    description:
      'Pokémon’s strengths were the same things that initially appeared to be weaknesses: Its unnamed protagonist allowed the player to place themselves in the adventure. All those monsters had to be captured one by one and integrated into the player’s combat roster, creating a real connection between human and digital critter.',
    price: 10,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/pt/4/43/Pok%C3%A9mon_Yellow_cover.png',
    yearOfRelease: 1998,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: "Gargoyle's Quest",
    description:
      'Dared to put players in the shoes (figuratively speaking) of a hated villain.',
    price: 10,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Gargoyles_Quest.jpg/220px-Gargoyles_Quest.jpg',
    yearOfRelease: 1990,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Dr. Mario',
    description: 'Action puzzle video game.',
    price: 10,
    imageUrl: 'https://pbs.twimg.com/media/EOeUdt4W4AEqh-t.png',
    yearOfRelease: 1990,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'The Final Fantasy Legend',
    description:
      'The Legend series stands out as being the world’s first portable RPG series, and its creators took advantage of the fact that they were painting on a fresh canvas to do their own weird thing.',
    price: 10,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGoXI_XqqYwxZRRni-LeW99gTGztxPNvCI5Zm4Ir_xEUt7tjAW&usqp=CAU',
    yearOfRelease: 1990,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Final Fantasy Adventure',
    description:
      'Takes the Zelda action-RPG format and pushes the role-playing mechanics even further than games like Golvelius and Crystalis, integrating Final Fantasy touchstones like chocobos, spell conventions, and even partner characters.',
    price: 10,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Final_Fantasy_Adventure_Front_Cover.jpg/220px-Final_Fantasy_Adventure_Front_Cover.jpg',
    yearOfRelease: 1992,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Yoshi',
    description:
      'Puzzle video game. Player is tasked with clearing monsters on playing field.',
    price: 10,
    imageUrl:
      'https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/237642.jpg',
    yearOfRelease: 1991,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: "Kirby's Dream Land",
    description:
      'Approachable, adorable, and possessed of hidden depths, the Kirby series occupies a unique place in Nintendo’s character pantheon, and it was established right here.',
    price: 10,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/83/Kdl1ussmall.jpg',
    yearOfRelease: 1992,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: "The Legend of Zelda: Link's Awakening",
    description:
      'First Zelda game to feature a complex trading chain subquest and the first in the series to make musical instruments a key element of the quest.',
    price: 10,
    imageUrl:
      'https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/a/ac/LA_Original_Soundtrack_Game_Boy_Cover.jpg/1200px-LA_Original_Soundtrack_Game_Boy_Cover.jpg',
    yearOfRelease: 1993,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Donkey Kong Land',
    description: '',
    price: 10,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/8/8c/Donkey_Kong_Land_Coverart.png',
    yearOfRelease: 1995,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Teenage Mutant Ninja Turtles III: Radical Rescue',
    description:
      'Each turtle has a different ability which is necessary to complete the game.',
    price: 10,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/fd/Teenage_Mutant_Ninja_Turtles_III_-_Radical_Rescue_Coverart.png',
    yearOfRelease: 1993,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Mega Man V',
    description:
      'As handheld action platformers go, this inventive rendition of an 8-bit standard (which sends Mega Man on a journey through the solar system to fight planet-themed bosses) is hard to top.',
    price: 10,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Megamanvbox.jpg',
    yearOfRelease: 1994,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Wario Land: Super Mario Land 3',
    description: 'First video game to feature Wario as a playable character.',
    price: 10,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/5f/Wario_Land_Box_Art.jpg',
    yearOfRelease: 1994,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Tetris',
    description: 'The relentless building block video puzzle',
    price: 10,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81zn-iZMHrL._SL1178_.jpg',
    yearOfRelease: 1994,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: "Mario's Picross",
    description:
      'Players are presented with a grid in which each row and column is assigned numeric values that represent consecutive filled-in blocks. The challenge comes in figuring out which blocks need to be filled and which should remain empty, a task that requires a touch of math skill and a great deal of logical intuition.',
    price: 10,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/90/Mario%27s_Picross.jpg',
    yearOfRelease: 1995,
    quantity: 100,
    console: 'Game Boy'
  },
  {
    name: 'Balloon Kid',
    description:
      'It’s easily one of the finest hidden treasures in the Game Boy library.',
    price: 10,
    imageUrl:
      'https://images.lukiegames.com/t_300e2/assets/images/GB/gb_balloon_kid_p_pmesmf.jpg',
    yearOfRelease: 1991,
    quantity: 100,
    console: 'Game Boy'
  }
]

console.log(seed.length)
