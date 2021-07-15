import React, { useState } from 'react'
import { connect } from 'react-redux'
import { IonPhaser } from '@ion-phaser/react'
import Phaser from 'phaser'
import { preload, create, update, collectStar, hitBomb } from '../game'

function App (props) {
  const [game, setGame] = useState({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update,
      collectStar: collectStar,
      hitBomb: hitBomb
    }
  })

  return (
    <>
      <h1>DBB</h1>
      {/* <div className='app'> */}
      <IonPhaser game={game} initialize={{ initialize: false }} />
      {/* </div> */}
    </>
  )
}

export default connect()(App)
