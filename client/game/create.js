/* eslint-disable prefer-const */
import Phaser from 'phaser'
import collectStar from './collectStar'
import hitBomb from './hitBomb'
import { createTrail, createExplosion } from './particles'
const game = require('./game')

export default function create () {
  this.lights.enable()
  game.keys = this.input.keyboard.addKeys('W,S,A,D')

  //  The platforms group contains the ground and the 2 ledges we can jump on
  game.platforms = this.physics.add.staticGroup()
  game.platforms.create(400, 700, 'ground').setScale(4).refreshBody()

  //  Now let's create some ledges
  game.platforms.create(600, 400, 'ground')
  game.platforms.create(50, 250, 'ground')
  game.platforms.create(750, 220, 'ground')

  // The player and its settings
  game.player = this.physics.add.sprite(100, 450, 'dude')
  game.player2 = this.physics.add.sprite(200, 450, 'dude')

  //  Player physics properties. Give the little guy a slight bounce.
  game.player.setBounce(0)
  game.player.setCollideWorldBounds(true)
  game.player2.setBounce(0)
  game.player2.setCollideWorldBounds(true)

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

  // Create particle manager
  createTrail(this)
  createExplosion(this)
  this.lights.active = true
  this.lights.setAmbientColor(255, 255, 255)
  game.pointLight2 = this.add.pointlight(0, 0, 5000, 100, 1, 0.1)
  game.pointLight = this.add.pointlight(0, 0, 5000, 100, 1, 0.1)

  game.pointLight2.color.r = 100
  game.pointLight2.color.g = 0
  game.pointLight2.color.b = 0

  //  Collide the player and the stars with the platforms
  this.physics.add.collider(game.player, game.platforms)
  this.physics.add.collider(game.player2, game.platforms)
  this.physics.add.collider(game.stars, game.platforms)
  this.physics.add.collider(game.bombs, game.platforms)

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  this.physics.add.overlap(game.player, game.stars, collectStar, null, this)

  this.physics.add.collider(game.player, game.bombs, hitBomb, null, this)
}
