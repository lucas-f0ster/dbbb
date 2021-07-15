/* eslint-disable prefer-const */
import Phaser from 'phaser'
import collectStar from './collectStar'
import hitBomb from './hitBomb'
const game = require('./game')

export default function create () {
  //  A simple background for our game
  this.add.image(400, 300, 'sky')

  //  The platforms group contains the ground and the 2 ledges we can jump on
  game.platforms = this.physics.add.staticGroup()

  //  Here we create the ground.
  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  game.platforms.create(400, 568, 'ground').setScale(2).refreshBody()

  //  Now let's create some ledges
  game.platforms.create(600, 400, 'ground')
  game.platforms.create(50, 250, 'ground')
  game.platforms.create(750, 220, 'ground')

  // The player and its settings
  game.player = this.physics.add.sprite(100, 450, 'dude')

  //  Player physics properties. Give the little guy a slight bounce.
  game.player.setBounce(0.2)
  game.player.setCollideWorldBounds(true)

  //  Our player animations, turning, walking left and walking right.
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'turn',
    frames: [{ key: 'dude', frame: 4 }],
    frameRate: 20
  })

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  })

  //  Input Events
  game.cursors = this.input.keyboard.createCursorKeys()

  //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
  game.stars = this.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
  })

  game.stars.children.iterate(function (child) {
    //  Give each star a slightly different bounce
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
  })

  game.bombs = this.physics.add.group()

  //  The score
  game.scoreText = this.add.text(16, 16, 'score: 0', {
    fontSize: '32px',
    fill: '#000'
  })

  //  Collide the player and the stars with the platforms
  this.physics.add.collider(game.player, game.platforms)
  this.physics.add.collider(game.stars, game.platforms)
  this.physics.add.collider(game.bombs, game.platforms)

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  this.physics.add.overlap(game.player, game.stars, collectStar, null, this)

  this.physics.add.collider(game.player, game.bombs, hitBomb, null, this)
}
