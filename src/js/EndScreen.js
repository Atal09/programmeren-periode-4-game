import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "./resources";
import { Level } from './scene.js';

export class EndScreen extends Scene {
  constructor() {
      super()
  }

  onInitialize(engine) {
      console.log('jhghkj')
      let gameover = new Actor({
          pos: new Vector(engine.screen.drawWidth / 2, engine.screen.drawHeight / 2),
          width: Resources.GameOver.width,
          height: Resources.GameOver.height
      })
      gameover.graphics.use(Resources.GameOver.toSprite())
      this.add(gameover)

      gameover.on('pointerup', (event) => {
          engine.goToScene('Level')
      })
  }
}