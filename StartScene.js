class StartScene extends Phaser.Scene {
    constructor() {
      super({ key: 'StartScene' })
    }
  
    create() {
      // Background
      this.add.rectangle(0, 0, larguraJogo * 2, alturaJogo * 2, 0x000000).setOrigin(0)
  
      // Title Text
      this.add.text(larguraJogo / 2, alturaJogo / 3, 'Alien Game', {
        fontFamily: 'Poppins',
        fontSize: '50px',
        fill: '#ffffff'
      }).setOrigin(0.5)
  
      // Instructions
      this.add.text(larguraJogo / 2, alturaJogo / 2, 'Press SPACE or CLICK to Start', {
        fontFamily: 'Poppins',
        fontSize: '30px',
        fill: '#AAAAAA'
      }).setOrigin(0.5)
  
      // Listen for keyboard or pointer input
      this.input.keyboard.once('keydown-SPACE', () => this.startGame())
      this.input.once('pointerdown', () => this.startGame())
    }
  
    startGame() {
      this.scene.start('GameScene')
    }
  }  