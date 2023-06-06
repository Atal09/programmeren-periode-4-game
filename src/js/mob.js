import { Actor, CollisionType } from 'excalibur';
import { Resources } from './resources';
import { Runner } from './player';

export class Mob extends Actor {
  constructor() {
    super({
      width: 10,
      height: 10,
      sprite: Resources.Enemy,
      collisionType: CollisionType.Active
    });
  }

  onInitialize() {
    this.on('precollision', this.handleCollision);
  }

  handleCollision(event) {
    if (event.other instanceof Runner) {
      event.other.takeDamage();
    }
  }
}
