/* categories for consoles (35+ million units sold, pre-2000)
    - NES
    - Sega Genesis
    - Game Boy
    - SNES
    - PlayStation
*/

const seed = [
  {
    name: 'Castlevania',
    description: 'This game was "Metroid" but spooky, and it was legendary.',
    price: 39.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/51/Castlevania_1_cover.png',
    yearOfRelease: 1986,
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Super Mario Bros.',
    description:
      'First in the "Super Mario" series of platformers. Successor to the 1983 arcade game, "Mario Bros."',
    price: 10.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png',
    yearOfRelease: 1985,
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Super Mario Bros. 2',
    description: 'Cooperative play.',
    price: 19.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/00/Super_Mario_Bros_2.jpg',
    yearOfRelease: 1988,
    quantity: 7,
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
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Duck Hunt',
    description: 'Most responsive, at-home light-gun shooters',
    price: 10.99,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/14/DuckHuntBox.jpg',
    yearOfRelease: 1988,
    quantity: 7,
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
    quantity: 7,
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
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Tetris',
    description: 'It will probably outlive us all.',
    price: 70,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/7d/Tetris_NES_cover_art.jpg',
    yearOfRelease: 1989,
    quantity: 7,
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
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Kung Fu',
    description: 'Stands among the best of the console.',
    price: 3.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/615epbvZ4%2BL._AC_SY741_.jpg',
    yearOfRelease: 1985,
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Punch-Out!!',
    description: 'Boxing sports fighting video game.',
    price: 12.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/3d/Punch-out_mrdream_boxart.PNG',
    yearOfRelease: 1987,
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Mega Man',
    description:
      'Established many of the gameplay, story, and graphical conventions that define the ensuing sequels, subseries, and spin-offs.',
    price: 119.99,
    imageUrl:
      'https://ih1.redbubble.net/image.108293369.1116/flat,750x,075,f-pad,750x70,f8f8f8.jpg',
    yearOfRelease: 1987,
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Mega Man 2',
    description:
      'Best-selling "Mega Man" game. More than 1.5 million copies sold.',
    price: 19.99,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/be/Megaman2_box.jpg',
    yearOfRelease: 1989,
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Mega Man 3',
    description: 'Pivotal moment for the franchise.',
    price: 14.99,
    imageUrl:
      'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/24279/15651/Game%20Nintendo%20NES-241-2__17813.1394712189.jpg?c=2&imbypass=on',
    yearOfRelease: 1990,
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Kid Icarus',
    description: 'Greek inspired fantasy world action platformer.',
    price: 19.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/b1/Kid_Icarus_NES_box_art.png',
    yearOfRelease: 1987,
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'DuckTales',
    description:
      '"DuckTales" introduced game mechanics still seen in titles like "Shovel Knight," "Dark Souls," "Bloodborne," and more.',
    price: 29.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/64/DuckTales_NES_Cover.png',
    yearOfRelease: 1989,
    quantity: 7,
    console: 'NES'
  },
  {
    name: "Kirby's Adventure",
    description: 'First time Kirby ever appeared on a console game.',
    price: 26.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/ae/Kirby%27s_Adventure_Coverart.png',
    yearOfRelease: 1993,
    quantity: 7,
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
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Teenage Mutant Ninja Turtles',
    description: 'Single player action game. First appearance of the TMNT.',
    price: 9.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/54/Teenage_Mutant_Ninja_Turtles_%281989_video_game%29.jpg',
    yearOfRelease: 1989,
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Ice Climber',
    description: 'Vertical platform video game.',
    price: 14.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/d/df/IceClimberboxartnes.jpg',
    yearOfRelease: 1985,
    quantity: 7,
    console: 'NES'
  },
  {
    name: 'Sonic the Hedgehog',
    description: 'Established an icon.',
    price: 14.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg',
    yearOfRelease: 1991,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: 'Sonic the Hedgehog 2',
    description:
      "Introduced Sonic's sidekick, Miles 'Tails' Prower, allowing co-op play.",
    price: 5.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/0c/Sonic_2_US_Cover.jpg',
    yearOfRelease: 1992,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: "Disney's Aladdin",
    description: 'Side-scrolling platform game based on the movie.',
    price: 24.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/0d/Aladdingenesis.jpg',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: 'The Lion King',
    description: 'Platformer based on the Disney movie.',
    price: 7.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/1/16/The_Lion_King_Coverart.png',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: 'Street Fighter II: Special Champion Edition',
    description:
      'Established many conventions of the genre, like linking combos together.',
    price: 9.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/f5/Street_Fighter_II_Dash_%28flyer%29.png',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: 'Mortal Kombat II',
    description:
      'Took the fighting game formula and infused it with a gore-drenched mentality',
    price: 19.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/5f/Mortal_Kombat_II_arcade.png',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: 'NBA Jam',
    description: 'Two-on-two game.',
    price: 19.99,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Nbajam.jpg',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: 'Dune: Battle for Arrakis',
    description: 'Fight two other noble houses for the control of the planet.',
    price: 12.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51WJ2K4MY2L._SY445_.jpg',
    yearOfRelease: 1983,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: 'Altered Beast',
    description:
      'Set in Ancient Greece. Player can assume form of different magical beasts.',
    price: 19.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/05/Altered_Beast_cover.jpg',
    yearOfRelease: 1988,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: 'Castlevania: Bloodlines',
    description: 'As usual, Dracula is involved.',
    price: 26.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/af/Castlevania_Bloodlines.jpg',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: 'Gunstar Heroes',
    description: 'Run-and-gun shooter action in single player and co-op modes.',
    price: 16.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/d/db/GunstarHeroesMDcover.png',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: "Dr. Robotnik's Mean Bean Machine",
    description: 'Familiar match-the-blob-color falling block gameplay.',
    price: 14.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/c/c2/Sonic_Mean_Bean_Machine.jpg',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: 'VectorMan',
    description: 'Awesome techno soundtrack.',
    price: 16.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/4/43/Vectorman_cover.jpg',
    yearOfRelease: 1995,
    quantity: 7,
    console: 'Sega Genesis'
  },
  {
    name: 'Donkey Kong',
    description: 'A masterpiece of a game.',
    price: 19.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/23/Donkey_Kong_94_box_art.jpg',
    yearOfRelease: 1994,
    quantity: 7,
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
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Super Mario Land 2: 6 Golden Coins',
    description: 'Most successful and highest rating title on Game Boy',
    price: 12.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91x1gsV0G3L._SL1500_.jpg',
    yearOfRelease: 1992,
    quantity: 7,
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
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Pokemon Red',
    description: "Gotta catch 'em all!",
    price: 9.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_box_art_-_Red_Version.png',
    yearOfRelease: 1996,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Pokemon Green',
    description: "Gotta catch 'em all!",
    price: 24.99,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGSBpnwKM4owV2hImYzBppxxZrGIKl3svA80qzXM-A9XBTxJxm&usqp=CAU',
    yearOfRelease: 1996,
    quantity: 7,
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
    price: 9.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/pt/4/43/Pok%C3%A9mon_Yellow_cover.png',
    yearOfRelease: 1998,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: "Gargoyle's Quest",
    description:
      'Dared to put players in the shoes (figuratively speaking) of a hated villain.',
    price: 29.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Gargoyles_Quest.jpg/220px-Gargoyles_Quest.jpg',
    yearOfRelease: 1990,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Dr. Mario',
    description: 'Action puzzle video game.',
    price: 10.99,
    imageUrl: 'https://pbs.twimg.com/media/EOeUdt4W4AEqh-t.png',
    yearOfRelease: 1990,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'The Final Fantasy Legend',
    description:
      'The Legend series stands out as being the world’s first portable RPG series, and its creators took advantage of the fact that they were painting on a fresh canvas to do their own weird thing.',
    price: 16.99,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGoXI_XqqYwxZRRni-LeW99gTGztxPNvCI5Zm4Ir_xEUt7tjAW&usqp=CAU',
    yearOfRelease: 1990,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Final Fantasy Adventure',
    description:
      'Takes the Zelda action-RPG format and pushes the role-playing mechanics even further than games like Golvelius and Crystalis, integrating Final Fantasy touchstones like chocobos, spell conventions, and even partner characters.',
    price: 28.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Final_Fantasy_Adventure_Front_Cover.jpg/220px-Final_Fantasy_Adventure_Front_Cover.jpg',
    yearOfRelease: 1991,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Yoshi',
    description:
      'Puzzle video game. Player is tasked with clearing monsters on playing field.',
    price: 7.99,
    imageUrl:
      'https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/237642.jpg',
    yearOfRelease: 1991,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Kid Dracula',
    description:
      "Just burn through the comical monsters with your undead fireballs and reclaim Dracula's place as King of the Damned, OK?",
    price: 13.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/70/Kid_Dracula_%28cover%29.jpg',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Space Invaders',
    description: 'Contained an entire SNES game!',
    price: 8.99,
    imageUrl: 'https://i.ebayimg.com/images/g/i~AAAOSwDs9dqfjf/s-l1600.jpg',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Yoshi',
    description:
      'Puzzle video game. Player is tasked with clearing monsters on playing field.',
    price: 17.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/7d/Yoshi_game_cover.jpg',
    yearOfRelease: 1991,
    console: 'NES'
  },
  {
    name: "Kirby's Dream Land",
    description:
      'Approachable, adorable, and possessed of hidden depths, the "Kirby" series occupies a unique place in Nintendo’s character pantheon, and it was established right here.',
    price: 14.99,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/83/Kdl1ussmall.jpg',
    yearOfRelease: 1992,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: "The Legend of Zelda: Link's Awakening",
    description:
      'First Zelda game to feature a complex trading chain subquest and the first in the series to make musical instruments a key element of the quest.',
    price: 39.99,
    imageUrl:
      'https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/a/ac/LA_Original_Soundtrack_Game_Boy_Cover.jpg/1200px-LA_Original_Soundtrack_Game_Boy_Cover.jpg',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Donkey Kong Land',
    description: 'Portable sequel to home console title, "Donkey Kong Country"',
    price: 24.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/8/8c/Donkey_Kong_Land_Coverart.png',
    yearOfRelease: 1995,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Teenage Mutant Ninja Turtles III: Radical Rescue',
    description:
      'Each turtle has a different ability which is necessary to complete the game.',
    price: 64.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/fd/Teenage_Mutant_Ninja_Turtles_III_-_Radical_Rescue_Coverart.png',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Mega Man V',
    description:
      'As handheld action platformers go, this inventive rendition of an 8-bit standard (which sends Mega Man on a journey through the solar system to fight planet-themed bosses) is hard to top.',
    price: 24.99,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Megamanvbox.jpg',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Wario Land: Super Mario Land 3',
    description: 'First video game to feature Wario as a playable character.',
    price: 24.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/5f/Wario_Land_Box_Art.jpg',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Tetris',
    description: 'The relentless building block video puzzle',
    price: 14.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81zn-iZMHrL._SL1178_.jpg',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: "Mario's Picross",
    description:
      'Players are presented with a grid in which each row and column is assigned numeric values that represent consecutive filled-in blocks. The challenge comes in figuring out which blocks need to be filled and which should remain empty, a task that requires a touch of math skill and a great deal of logical intuition.',
    price: 39.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/90/Mario%27s_Picross.jpg',
    yearOfRelease: 1995,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Balloon Kid',
    description:
      'It’s easily one of the finest hidden treasures in the Game Boy library.',
    price: 10.99,
    imageUrl:
      'https://images.lukiegames.com/t_300e2/assets/images/GB/gb_balloon_kid_p_pmesmf.jpg',
    yearOfRelease: 1991,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Metroid II: Return of Samus',
    description:
      'If this sequel falls short of true excellence, it is only because it is trying to do too much.',
    price: 10.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/93/Metroid2_boxart.jpg',
    yearOfRelease: 1997,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: "Castlevania II: Belmont's Revenge",
    description: 'Much better designed.',
    price: 4.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/76/Castlevania_II_Belmont%27s_Revenge.jpg',
    yearOfRelease: 1991,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Bionic Commando',
    description: 'An NES-to-Game Boy conversion done right.',
    price: 24.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/60/Bionic-commando-gb.jpg',
    yearOfRelease: 1992,
    quantity: 7,
    console: 'Game Boy'
  },
  {
    name: 'Super Mario World',
    description:
      'The first game to be released on the SNES. Best platformer on the system.',
    price: 9.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png',
    yearOfRelease: 1991,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Super Mario All-Stars',
    description:
      'Bundle of previous popular titles in the series into a single SNES cartridge!',
    price: 44.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/3c/Super_Mario_All_Stars_%28game_box_art%29.jpg',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Super Mario Kart',
    description: 'The game that started the phenomenon.',
    price: 44.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/38/Supermariokart_box.JPG',
    yearOfRelease: 1992,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: "Super Mario World 2: Yoshi's Island",
    description: 'Players would be controlling Yoshi in a new world.',
    price: 33.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/9a/Yoshi%27s_Island_%28Super_Mario_World_2%29_box_art.jpg',
    yearOfRelease: 1995,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Donkey Kong Country',
    description:
      'Despite its ties to the Mario brothers, this game played very differently.',
    price: 19.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/c/c1/Dkc_snes_boxart.jpg',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: "Donkey Kong Country 2: Diddy's Kong Quest",
    description:
      'https://upload.wikimedia.org/wikipedia/en/c/c3/DK_Country_2.jpg',
    price: 19.99,
    imageUrl: '',
    yearOfRelease: 1983,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: "Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    description:
      'https://upload.wikimedia.org/wikipedia/en/c/cc/Dkc3_snes_boxart.jpg',
    price: 19.99,
    imageUrl: '',
    yearOfRelease: 1983,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Legend of Zelda: A Link to the Past',
    description:
      'Pinnacle of the series and the best game in the SNES library.',
    price: 24.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg',
    yearOfRelease: 1992,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Super Metroid',
    description: 'Effortlessly and masterfully melded story with gameplay.',
    price: 34.99,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Smetroidbox.jpg',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Chrono Trigger',
    description: 'Crown jewel of the JRPG genre.',
    price: 22.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/a7/Chrono_Trigger.jpg',
    yearOfRelease: 1995,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Final Fantasy IV',
    description: 'Originally released as Final Fantasy II',
    price: 25.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/90/Final_Fantasy_IV.jpg',
    yearOfRelease: 1991,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Final Fantasy VI',
    description:
      'Originally released as "Final Fantasy III", it is the most memorable stories told on the SNES.',
    price: 25.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/05/Final_Fantasy_VI.jpg',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Secret of Mana',
    description: 'Exploration heavy adventure game.',
    price: 22.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/b7/Secret_of_Mana_Box.jpg',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Donkey Kong Country',
    description: 'Reboot of the franchise.',
    price: 20.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/c/c1/Dkc_snes_boxart.jpg',
    yearOfRelease: 1983,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Mega Man X',
    description: "First 'Mega Man' game for the SNES.",
    price: 18.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/f1/Mega_Man_X_Coverart.png',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Mega Man X2',
    description: 'Better weapons, bosses, and levels.',
    price: 69.99,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cb/Mmx2_box.jpg',
    yearOfRelease: 1995,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: "Super Ghouls 'N Ghosts",
    description: 'Timing a perfect jump made enduring the punishment worth it.',
    price: 24.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/35/GhoulsSNES_boxart.JPG',
    yearOfRelease: 1991,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'F-Zero',
    description: 'Looked and played like no other racing game before it.',
    price: 14.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/9b/SNES_F-Zero_boxart.jpg',
    yearOfRelease: 1991,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Star Fox',
    description: 'A rush to play.',
    price: 12.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/52/Star_Fox_SNES.jpg',
    yearOfRelease: 1993,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: "Kirby's Dream Course",
    description: "Kirby's best game on the SNES is a ... golf title.",
    price: 14.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/d/d8/Kirbydreamcourse.jpg',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Mortal Kombat II',
    description:
      'First MK made waves for its unseen levels of violence. Sequel made waves because it is a good fighting game.',
    price: 22.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/5f/Mortal_Kombat_II_arcade.png',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Super Mario RPG',
    description: 'Name says it all.',
    price: 10.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/8/89/SuperMarioRPGSNESCoverArtUS.jpg',
    yearOfRelease: 1996,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'SimCity',
    description: 'City-building simulation video game.',
    price: 14.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/7b/SimCity_Classic_cover_art.jpg',
    yearOfRelease: 1991,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Kirby Super Star',
    description: 'Side-scrolling platform game where player controls Kirby.',
    price: 74.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/3a/Kirby_Super_Star_Coverart.png',
    yearOfRelease: 1983,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Mario Paint',
    description: 'Allowed the creation of custom stamps.',
    price: 4.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/e/ea/Mario_paint_box.jpg',
    yearOfRelease: 1992,
    quantity: 7,
    console: 'SNES'
  },
  {
    name: 'Street Fighter Collection',
    description: 'Brought the true spirit of the arcade to a home console.',
    price: 12.99,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/0d/Street_Fighter_Collection.jpeg',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Castlevania: Symphony of the Night',
    description: 'Considered best game of all time.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Metal Gear Solid',
    description: 'Thrilling interactive experience.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: "Tony Hawk's Pro Skater",
    description:
      'Combined the two coolest things: skateboarding and video games.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Tekken',
    description: '',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Silent Hill',
    description: 'Aimed to psychologically devastate you.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Gran Turismo',
    description: 'Series popularized the racing sim genre.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1997,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Gran Turismo 2',
    description: 'Simply as good as things got on the PS.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1999,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Final Fantasy VII',
    description: 'The Beatles of role-playing games.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1997,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Final Fantasy VIII',
    description: '',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1999,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Tomb Raider',
    description: 'Pioneered the 3D action adventure genre.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1996,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Tomb Raider II',
    description: 'Made sure everyone knew who Lara Croft was.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1997,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Tomb Raider III',
    description: 'Slightly tweaked cash-in.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1997,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Crash Bandicoot',
    description: '',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1996,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Resident Evil',
    description: 'Standout in its own right.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1996,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Resident Evil 2',
    description: 'Game superior to the first in nearly every way.',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1998,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Spyro the Dragon',
    description: '',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1998,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: "Spyro 2: Ripto's Rage",
    description: '',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1998,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Rayman',
    description: '',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Driver',
    description: '',
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1994,
    quantity: 7,
    console: 'Playstation'
  },
  {
    name: 'Tekken 3',
    description:
      "Arcade port that pushed the boundaries of the Playstation's graphical capability.",
    price: 10.99,
    imageUrl: '',
    yearOfRelease: 1998,
    quantity: 7,
    console: 'Playstation'
  }
]

console.log(seed.length)
