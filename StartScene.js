class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' })
  }

  preload() {
    this.load.image('background', 'assets/bg.png') // Load the background
  }

  create() {
    // Add the background image
    let bg = this.add.image(larguraJogo / 2, alturaJogo / 2, 'background')
    bg.setDisplaySize(larguraJogo, alturaJogo)

    // Apply a blur effect using a custom shader or tint
    let blurOverlay = this.add.graphics()
    blurOverlay.fillStyle(0x000000, 0.8) // Semi-transparent black overlay
    blurOverlay.fillRect(0, 0, larguraJogo, alturaJogo)

    // Title Text
    this.add.text(larguraJogo / 2, alturaJogo / 3, 'ALIEN GAME', {
      fontFamily: 'Poppins',
      fontSize: '70px',
      fill: '#ffffff'
    }).setOrigin(0.5)

    // Instructions
    this.add.text(larguraJogo / 2, 350, 'Press SPACE or CLICK to Start', {
      fontFamily: 'Poppins',
      fontSize: '20px',
      fill: '#FFFFFF'
    }).setOrigin(0.5)

    // Listen for keyboard or pointer input
    this.input.keyboard.once('keydown-SPACE', () => this.startGame())
    this.input.once('pointerdown', () => this.startGame())
  }

  startGame() {
    this.scene.start('GameScene')
  }
}
