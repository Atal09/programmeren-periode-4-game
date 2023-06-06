import { Actor, Vector, GraphicsGroup } from 'excalibur';
import { Resources } from './resources.js';

export class Background extends Actor {
  offset;

  onInitialize(engine) {
    const backgroundImage = Resources.Background.toSprite();

    // Aanpassen van de breedte en hoogte van de sprite
    const newWidth = 900; // Nieuwe breedte in pixels
    const newHeight = 700; // Nieuwe hoogte in pixels
    backgroundImage.width = newWidth;
    backgroundImage.height = newHeight;

    this.offset = newWidth;

    const group = new GraphicsGroup({
      members: [
        {
          graphic: backgroundImage,
          pos: new Vector(0, 0),
        },
        {
          graphic: backgroundImage,
          pos: new Vector(backgroundImage.width, 0),
        },
      ],
    });

    this.graphics.anchor = new Vector(0, 0);
    this.graphics.add(group);
    this.pos = new Vector(0, 0);
    this.vel = new Vector(-110, 0); // Aanpassen van de scrollsnelheid indien nodig
  }

  onPostUpdate(engine, delta) {
    if (this.pos.x < -this.offset) {
      this.pos = new Vector(0, 0);
    }
  }
}
