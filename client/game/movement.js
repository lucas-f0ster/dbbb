const game = require('./game')

export const left = (player) => {
  if (player === 'player1') {
    game.player.setVelocityX(-460)
    game.player2.anims.play('left', true)
    game.spark.setAngle(Math.PI - game.player.body.angle)
    game.spark.start()
  } else {
    game.player2.setVelocityX(-460)
    game.player2.anims.play('left', true)
    game.spark2.setAngle(Math.PI - game.player2.body.angle)
    game.spark2.start()
  }
}

export const right = (player) => {
  if (player === 'player1') {
    game.player.setVelocityX(460)
    game.player.anims.play('right', true)
    game.spark.start()
    game.spark.setAngle(Math.PI - game.player.body.angle)
  } else {
    game.player2.setVelocityX(460)
    game.player2.anims.play('right', true)
    game.spark2.start()
    game.spark2.setAngle(Math.PI - game.player2.body.angle)
  }
}

export const up = (player) => {
  if (player === 'player1') {
    game.player.setImmovable(false)
    game.player.setVelocityY(-750)
    game.spark.setAngle(Math.PI - game.player.body.angle)
  } else {
    game.player2.setImmovable(false)
    game.player2.setVelocityY(-750)
    game.spark2.setAngle(Math.PI - game.player2.body.angle)
  }
}

export const down = (player) => {

}
