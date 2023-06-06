import { Actor, Input, CollisionType } from 'excalibur';
import { Resources } from './resources';
import { resetScore } from './score';

export class Runner extends Actor {
  constructor() {
    super({
      width: 50,
      height: 50,
      sprite: Resources.Player,
      collisionType: CollisionType.Passive
    });

    this.health = 3; // Spelergezondheid
    this.velY = 0; // Verticale snelheid
    this.jumpSpeed = -1000; // Snelheid waarmee de speler omhoog springt
    this.gravity = 2000; // Zwaartekracht die op de speler wordt toegepast

    this.on("preupdate", this.handleInput);
  }

  handleInput() {
    if (Input.keyboard.isPressed(Input.Keys.Space)) {
      this.jump();
    }
  }

  jump() {
    this.velY = this.jumpSpeed;
  }

  update(engine, delta) {
    this.velY += this.gravity * delta;
    this.pos.y += this.velY * delta;

    if (this.pos.y + this.height > engine.drawHeight) {
      this.pos.y = engine.drawHeight - this.height;
      this.velY = 0;
    }
  }

  takeDamage() {
    this.health--;
    if (this.health <= 0) {
      // Speler is uitgeschakeld, voer hier de logica uit om het spel te beëindigen
      resetScore();
      // Voer andere benodigde acties uit, zoals het tonen van een game over scherm of het resetten van de scene.
    }
  }
}
