const game = require('./game')

export default function update () {
  if (game.gameOver) {
    return
  }

// ****** Normal player movement ******
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
 // ****** Normal player movement ******


 // ******* Dash testing *******
    // Dash needs a time out - currently runs until key is released 
    // Dash needs to "stun" player if world edge or platform is hit
    // Player still has control of movement while in dash
    // No win condition is set
    var dash;

    if (game.cursors.space.isDown && game.cursors.left.isDown){
        dash = -1500
        game.player.body.velocity.x = dash

    } else if (game.cursors.space.isDown && game.cursors.right.isDown) {
        dash = 1500
        game.player.body.velocity.x = dash

    } else if (game.cursors.space.isDown && game.cursors.up.isDown){
        dash = -1500
        game.player.body.velocity.y = dash

    } else if (game.cursors.space.isDown && game.cursors.down.isDown){
        dash = 1500
        game.player.body.velocity.y = dash

    }
// ******* Dash testing *******
}
