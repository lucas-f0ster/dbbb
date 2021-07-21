import MergedInput from '../main.js'
export default class LandingScreen extends Phaser.Scene {

    
    constructor ()
    {
        super({ key: 'LandingScreen' });
    }
    init()
    {
        this.sunMap = {
            mapData: 'sun_map.json', tileData: "gridtiles.png", backgroundData:  "sun_background.png"
        }
        this.eyeMap = {
            mapData: 'eye_background.json', tileData: "gridtiles.png", backgroundData:  "eye_background.png"
        }
        this.dragonMap = {
            mapData: 'dragon_background.json', tileData: 'gridtiles.png', backgroundData: 'dragon_background.png'
        }
        this.playerNumber = 0
    }

    preload ()
    {
        this.load.scenePlugin('mergedInput', MergedInput);
        this.load.image('button', './assets/select.png')
        this.load.image('bg', './assets/basic_sky.png')
    }

    create()
    {
        // const text = this.add.text(240, 300, "Press A/X to Play!", { fontFamily: "Arial Black", fontSize: 82 });
        // text.setStroke('#000000', 4);
        // //  Apply the gradient fill.
        // const gradient = text.context.createLinearGradient(0, 0, 0, text.height);
        // gradient.addColorStop(0, '#111111');
        // gradient.addColorStop(.5, '#ffffff');
        // gradient.addColorStop(.5, '#aaaaaa');
        // gradient.addColorStop(1, '#111111');
        // text.setFill(gradient);
        const bg = this.add.image(0,0,'bg').setScale(2)
        const sunButton = this.add.image(200, 600, 'button').setInteractive().setScale(0.5);
        const dragonButton = this.add.image(600, 600, 'button').setInteractive().setScale(0.5);
        const eyeButton = this.add.image(1000, 600, 'button').setInteractive().setScale(0.5);
        sunButton.once('pointerup', this.startSunMap, this)
        dragonButton.once('pointerup', this.startDragonMap, this)
        eyeButton.once('pointerup', this.startEyeMap, this)
    }
    startEyeMap()
    {
        let playerNumber = this.mergedInput.players.length
        this.scene.start('Arena', { mapData: 'eye_background.json', tileData: "gridtiles.png", backgroundData:  "eye_background.png", numberOfPlayers: playerNumber })
    }
    startDragonMap()
    {
        let playerNumber = this.mergedInput.players.length
            this.scene.start('Arena', { mapData: 'dragon_background.json', tileData: "gridtiles.png", backgroundData:  "dragon_background.png", numberOfPlayers: playerNumber })    }
    startSunMap()
    {
        let playerNumber = this.mergedInput.players.length
            this.scene.start('Arena', { mapData: 'sun_map.json', tileData: "gridtiles.png", backgroundData:  "sun_background.png", numberOfPlayers: playerNumber })
    }
    update()    
    {
        this.mergedInput.players.forEach((player, i) => {
            this.add.text(200 * (i + 1), 100, `Hello player ${i + 1}`, { fontSize: 20, color: '#00ff00' })
        })
    }
} 
