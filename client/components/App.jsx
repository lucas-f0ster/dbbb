import React, { useState } from 'react'
import { connect } from 'react-redux'
import { IonPhaser } from '@ion-phaser/react'
import Phaser from 'phaser'
import preload from '../game/preload'
import create from '../game/create'
import update from '../game/update'

function App (props) {
  const [game, setGame] = useState({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: true
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  })

  return (
    <>
      <h1>DBB</h1>
      <IonPhaser game={game} initialize={{ initialize: false }} />
    </>
  )
}

export default connect()(App)
