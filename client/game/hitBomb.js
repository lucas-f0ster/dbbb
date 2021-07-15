const game = require('./game')

export default function hitBomb (player, bomb) {
  this.physics.pause()
  player.setTint(0xff0000)
  player.anims.play('turn')
  game.gameOver = true
}
