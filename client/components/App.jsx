import React, { useState } from 'react'
import { IonPhaser } from '@ion-phaser/react'
import Phaser from 'phaser'
import Arena from '../game/arena'
import LandingScreen from '../game/LandingScreen'

function App (props) {
  const [game, setGame] = useState({
    parent: 'monitor',
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    input: {
      gamepad: true
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 1000 },
        debug: false
      }
    },
    scene: [
      LandingScreen,
      Arena
    ]

  })

  return (
    <>
      <IonPhaser game={game} initialize={{ initialize: true }} />
    </>
  )
}

export default (App)
