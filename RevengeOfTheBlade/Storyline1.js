/*  STORYLINE SCENE (before stage1)


*/

var moveOnAlive = false;
var ENTER;
var script;
var enterText;

class Storyline1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Storyline1' });
    }

    preload() {

    }

    create() {

      script = 'This is the story blablabl ablabla blablab lablab labla bla blabl ablabla blab lab labla blabla. This is that... blab lablab lablabla You first have to conquer the prehistoric era and upgrade your attacks blab lablabla blabla blab lablabla blab lablab lablabla blabl ablab lablabla blabla'
      this.label = this.add.text(100, 100, '', { fontSize: '25px' }).setWordWrapWidth(600);
      this.typewriteText(script);
      ENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

      enterText = this.add.text(550,450,'[PRESS ENTER TO START]', { fontSize: '15px', fill: '#ffffff'});
      enterText.visible = false;


    }

    typewriteText(text){
      const length = text.length
      let i = 0
      this.time.addEvent({
        callback: () => {
          this.label.text += text[i]
          ++i
        },
        repeat: length -1,
        delay: 50
      })

      this.time.addEvent({
          delay: 6000,
          callback: () => {
              enterText.visible = true;
          }
      })

    }


    update() {
      if (ENTER.isDown) {
        this.scene.stop('Storyline1');
        this.scene.launch('Stage1');
      }

      }
}