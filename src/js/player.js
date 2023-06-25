import { Actor, CollisionType,Input, SpriteSheet, Vector, range, Animation } from "excalibur";
import { Resources } from './resources';
import { resetScore } from './score';
import { Rock } from "./rock";
import { EndScreen } from './EndScreen.js';
import { Enemy } from './mob.js';

export class Player extends Actor {
  constructor() {
    super({
      width: Resources.Player.width / 4,
      height: Resources.Player.height / 4,
      sprite: Resources.Player,
      collisionType: CollisionType.Passive
    });

    
    this.velY = 0; // Verticale snelheid
    this.jumpSpeed = -1000; // Snelheid waarmee de speler omhoog springt
    this.gravity = 2000; // Zwaartekracht die op de speler wordt toegepast

    
  }


  onInitialize(engine) {
    this.pos = new Vector(100,475)
    this.scale = new Vector(1.4,1.4)
    this.body.collisionType = CollisionType.Active
    this.body.useGravity = false
    console.log(engine)
    this.graphics.use(Resources.Player.toSprite())


    this.on('collisionstart', (event) => {
      if (event.other instanceof Enemy) {
      //   this.GameOver()
        this.kill();
        engine.goToScene('Eindscherm')
      }
    });

    this.on('collisionstart', (event) => {
      if (event.other instanceof Rock) {
        
        this.kill();
        engine.goToScene('Eindscherm')
      }
    });


  }


  onPreUpdate(engine) {
  let xspeed = 0
  let yspeed = 0
  let kb = engine.input.keyboard
  if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)) {
      yspeed = -300
  }
  if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Down)) {
    yspeed = 300
  }
  this.vel = new Vector(xspeed, yspeed)
  }

  



  

}
