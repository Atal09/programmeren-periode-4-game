import { Actor, CollisionType,Input, SpriteSheet, Vector, range, Animation } from "excalibur";
import { Resources } from './resources';
import { Player } from './player';



export class Enemy extends Actor{
  constructor() {
    super({
      width: Resources.Enemy.width/2 ,
      height: Resources.Enemy.height/2,
      
      
    });
    
      
      }
  onInitialize(engine) {            
    this.body.collisionType = CollisionType.Active
    this.graphics.use(Resources.Enemy.toSprite())
    this.pos = new Vector(900,460)
    
    this.vel = new Vector(-250,0)            
    this.body.useGravity = false;  

  }

     
 
  

}






  


