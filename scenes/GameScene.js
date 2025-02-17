class GameScene extends Phaser.Scene {
    constructor() {
      super({ key: 'GameScene' })
    }
  
    preload() {
      this.load.image('background', 'assets/bg.png')
      this.load.image('player', 'assets/alien.png')
      this.load.image('turbo_nave', 'assets/turbo.png')
      this.load.image('plataforma_tijolo', 'assets/tijolos.png')
      this.load.image('moeda', 'assets/moeda.png')
      this.load.image('board', 'assets/board.png')
    }
  
    create() {
      this.add.image(larguraJogo / 2, alturaJogo / 2, 'background')
        .setDisplaySize(larguraJogo, alturaJogo)
  
      this.fogo = this.add.sprite(0, 0, 'turbo_nave')
      this.fogo.setVisible(false)
  
      this.alien = this.physics.add.sprite(larguraJogo / 2, 0, 'player')
      this.alien.setCollideWorldBounds(true)
      this.teclado = this.input.keyboard.createCursorKeys()
  
      this.plataforma = this.physics.add.staticImage(150, 450, 'plataforma_tijolo')
      this.plataforma2 = this.physics.add.staticImage(530, 170, 'plataforma_tijolo')
  
      this.physics.add.collider(this.alien, this.plataforma)
      this.physics.add.collider(this.alien, this.plataforma2)
  
      this.moeda = this.physics.add.sprite(larguraJogo / 2, 0, 'moeda')
      this.moeda.setCollideWorldBounds(true)
      this.moeda.setBounce(0.7)
      this.physics.add.collider(this.moeda, this.plataforma)
      this.physics.add.collider(this.moeda, this.plataforma2)

      this.physics.add.staticImage(120, 80, 'board')

      this.pontuacao = 0
      this.placar = this.add.text(115, 52, this.pontuacao, {
        fontFamily: 'Poppins',
        fontSize: '45px',
        fill: '#FFFFFF'
      })

      this.physics.add.staticImage(80, 78, 'moeda')
  
      this.physics.add.overlap(this.alien, this.moeda, () => {
        this.moeda.setVisible(false)
        let posicaoMoeda_Y = Phaser.Math.RND.between(50, alturaJogo - 100)
        this.moeda.setPosition(posicaoMoeda_Y, 100)
        this.pontuacao += 1
        this.placar.setText(this.pontuacao)
        this.moeda.setVisible(true)
      })
    }
  
    update() {
      if (this.teclado.left.isDown) {
        this.alien.setVelocityX(-150)
      } else if (this.teclado.right.isDown) {
        this.alien.setVelocityX(150)
      } else {
        this.alien.setVelocityX(0)
      }
  
      if (this.teclado.up.isDown) {
        this.alien.setVelocityY(-150)
        this.ativarTurbo()
      } else {
        this.semTurbo()
      }
  
      this.fogo.setPosition(this.alien.x, this.alien.y + this.alien.height / 2)
    }
  
    ativarTurbo() {
      this.fogo.setVisible(true)
    }
  
    semTurbo() {
      this.fogo.setVisible(false)
    }
  }
  