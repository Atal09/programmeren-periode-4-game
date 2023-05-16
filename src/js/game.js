import { Actor, Engine, Vector, Label, Color, Font } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Game extends Engine {
  constructor() {
    super({ width: 640, height: 480 });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    
    const Background = new Actor();
    Background.graphics.use(Resources.Background.toSprite());
    Background.scale = new Vector(5.3, 5.3)
    this.add(Background);
    
    
    const fish = new Actor();
    fish.graphics.use(Resources.Fish.toSprite());
    fish.pos = new Vector(400, 300);
    fish.vel = new Vector(-30, 10);
    this.add(fish);

    const anotherFish = new Actor();
    anotherFish.graphics.use(Resources.Fish.toSprite());
    anotherFish.pos = new Vector(100, 100);
    anotherFish.vel = new Vector(10, 10);
    this.add(anotherFish);
    
    const Sans = new Actor({    
    width: Resources.Sans.width,
    height: Resources.Sans.height
    });
    Sans.graphics.use(Resources.Sans.toSprite());
    Sans.pos = new Vector(200,100);
    Sans.vel = new Vector(-40, 20);
    Sans.scale = new Vector(0.4,0.4)
    this.add(Sans)
    
  Sans.on("pointerup", (event) => {
 event.kill()
})

    
     
  }
}

new Game();
