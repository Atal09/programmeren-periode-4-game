import { Actor, CollisionType,Input, SpriteSheet, Vector, range, Animation } from "excalibur";
import { Resources } from "./resources";


export class Rock extends Actor {
  constructor() {
    super({
      width: Resources.Rock.width,
      height: Resources.Rock.height,
      
    });

    
  }

  onInitialize(engine) {

    this.graphics.use(Resources.Rock.toSprite());
    this.pos = new Vector(900, 60);
    this.scale = new Vector(0.5, 0.5);
    this.vel = new Vector(-250, 0);
    this.body.useGravity = false;
    this.body.collisionType = CollisionType.Active

  }

}
