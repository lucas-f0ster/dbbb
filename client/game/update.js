const game = require('./game')

export default function update () {
  if (game.gameOver) {
    return
  }

  if (game.cursors.left.isDown) {
    game.player.setVelocityX(-460)
    game.player.anims.play('left', true)
    game.spark.setAngle(Math.PI - game.player.body.angle)
    game.spark.start()
  } else if (game.cursors.right.isDown) {
    game.player.setVelocityX(460)
    game.player.anims.play('right', true)
    game.spark.start()
    game.spark.setAngle(Math.PI - game.player.body.angle)
  } else {
    game.player.setVelocityX(0)
    game.player.anims.play('turn')
    game.spark.stop()
    game.spark.setAngle(Math.PI - game.player.body.angle)
  }
  if (game.cursors.up.isDown && game.player.body.touching.down) {
    game.player.setVelocityY(-550)
    game.spark.setAngle(Math.PI - game.player.body.angle)
  }
}
