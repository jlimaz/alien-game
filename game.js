const larguraJogo = 730
const alturaJogo = 874

const config = {
  type: Phaser.AUTO,
  width: larguraJogo,
  height: alturaJogo,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [StartScene, GameScene] // Scenes are now separate files
}

// Start the game
const game = new Phaser.Game(config)