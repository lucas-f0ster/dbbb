import { down, left, right, up } from './movement'

const game = require('./game')

export default function update () {
  game.pointLight2.setPosition(game.player2.x, game.player2.y)
  game.pointLight.setPosition(game.player.x, game.player.y)
  if (game.gameOver) {
    return
  }

  if (game.cursors.left.isDown) {
    left('player1')
  } else if (game.cursors.right.isDown) {
    right('player1')
  } else {
    game.player.setImmovable(false)
    game.player.setVelocityX(game.player.body.velocity.x / 2)
    game.player.anims.play('turn')
    game.spark.stop()
    game.spark.setAngle(Math.PI - game.player.body.angle)
  }

  if (game.keys.D.isDown) {
    right('player2')
  } else if (game.keys.A.isDown) {
    left('player2')
  } else {
    game.player2.setImmovable(false)
    game.player2.setVelocityX(game.player2.body.velocity.x / 2)
    game.player2.anims.play('turn')
    game.spark2.stop()
    game.spark2.setAngle(Math.PI - game.player.body.angle)
  }

  if (game.keys.W.isDown && game.player2.body.touching.down) {
    up('player2')
  }
  if (game.cursors.up.isDown && game.player.body.touching.down) {
    up('player1')
  }
}
