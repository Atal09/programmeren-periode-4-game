
import { Actor, CollisionType, Engine, Label, Scene, Vector, Color, Random, Timer } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import { Background } from './background.js';
import { Player } from './player.js';
import { initializeScoreLabel, increaseScore, resetScore } from './score.js';
import { Enemy } from './mob.js';

import { Level } from './scene.js';
import { Rock } from './rock.js';



export class Spawner extends Actor {

    constructor() {
        super();
        this.random = new Random(1337);
      }
    


onInitialize(engine) {
    this.spawnEnemy(engine);
    this.enemyTimer = new Timer({
        fcn: () => this.spawnEnemy(engine),
        interval: 5000,
        repeats: true,
    });
    
    engine.currentScene.add(this.enemyTimer);
    
    this.enemyTimer.start();




    setTimeout(() => {
      this.spawnRock(engine);
      this.rockTimer = new Timer({
        fcn: () => this.spawnRock(engine),
        interval: 20000,
        repeats: true,
      });

      engine.currentScene.add(this.rockTimer);
      this.rockTimer.start();
    }, 3000); 
    
        
}

spawnEnemy(engine) {
    console.log("Spawn");
    const enemy = new Enemy(
      this.random.integer(0, 800),
      this.random.integer(0, 600)
    );
    engine.currentScene.add(enemy);
  }


  spawnRock(engine) {
    console.log("Spawn rots");
    const rock = new Rock(
      this.random.integer(0, 800),
      this.random.integer(0, 600)
    );
    engine.currentScene.add(rock);
  }








}
