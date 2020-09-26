var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Scene1],
    
    scale:{
        autoCenter: Phaser.Scale.CENTER_HORIZONALLY,
        mode: Phaser.Scale.FIT
    },
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: false
        }
    }
};

var game = new Phaser.Game(config);
game.scene.start('Scene1');