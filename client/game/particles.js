const game = require('./game')

export const createTrail = (prop) => {
  game.spark = prop.add.particles('spark').createEmitter({
    speed: { min: 0, max: 0 },
    scale: { start: 0.5, end: 0.1 },
    alpha: { start: 0.5, end: 0, ease: 'Expo.easeIn' },
    blendMode: 'SCREEN',
    lifespan: 1000,
    follow: game.player
  })
  game.spark.reserve(1000)

  game.spark2 = prop.add.particles('spark2').createEmitter({
    speed: { min: 0, max: 0 },
    scale: { start: 0.5, end: 0.1 },
    alpha: { start: 0.5, end: 0, ease: 'Expo.easeIn' },
    blendMode: 'SCREEN',
    lifespan: 1000,
    follow: game.player2
  })
  game.spark2.reserve(1000)
  console.log(game.spark)
}

export const createExplosion = (prop) => {
  game.dust = prop.add.particles('dust').createEmitter({
    on: false,
    follow: game.player,
    followOffset: -32,
    scale: { start: 0.1, end: 0.6 },
    lifespan: 500
  })
}
