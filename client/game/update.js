const game = require('./game')

export default function update () {
  if (game.gameOver) {
    return
  }

  if (game.cursors.left.isDown) {
    game.player.setVelocityX(-160)

    game.player.anims.play('left', true)
  } else if (game.cursors.right.isDown) {
    game.player.setVelocityX(160)

    game.player.anims.play('right', true)
  } else {
    game.player.setVelocityX(0)

    game.player.anims.play('turn')
  }

  if (game.cursors.up.isDown && game.player.body.touching.down) {
    game.player.setVelocityY(-330)
  }
}
