// game.js

import { Actor, CollisionType, Engine, Label, Scene, Vector, Color } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import { Background } from './background.js';
import { Runner } from './player.js';
import { initializeScoreLabel, increaseScore, resetScore } from './score.js';
import { Mob } from './mob.js';
import { showEndScreen } from './EndScreen.js';

export class Game extends Engine {
  constructor() {
    super({ width: 800, height: 600 });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    const background = new Background();
    this.add(background);

    let run = new Runner();
    this.add(run);

    let mob = new Mob();
    this.add(mob);

    initializeScoreLabel(this);

    // Verhoog de score elke 5 seconden met 100
    setInterval(() => {
      increaseScore(100);
    }, 5000);
  }

  endGame() {
    // Reset de score en toon het eindscherm met de eindscore
    const finalScore = score;
    resetScore();
    showEndScreen(this, finalScore);
  }
}

new Game();
