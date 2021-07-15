import Phaser from 'phaser'
const game = require('./game')

export default function collectStar (player, star) {
  star.disableBody(true, true)

  //  Add and update the score
  var score = 0
  score += 10
  game.scoreText.setText('Score: ' + score)
  console.log(score)

  if (game.stars.countActive(true) === 0) {
    //  A new batch of stars to collect
    game.stars.children.iterate(function (child) {
      child.enableBody(true, child.x, 0, true, true)
    })

    var x =
    player.x < 400
      ? Phaser.Math.Between(400, 800)
      : Phaser.Math.Between(0, 400)

    var bomb = game.bombs.create(x, 16, 'bomb')
    bomb.setBounce(1)
    bomb.setCollideWorldBounds(true)
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
    bomb.allowGravity = false
  }
}
