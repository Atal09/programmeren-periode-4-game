import { Engine, Color, Physics, Vector} from "excalibur";
import { Level } from "./scene";
import { ResourceLoader } from "./resources";
import { StartScreen } from "./startscreen";
import { EndScreen } from './EndScreen.js';



export class Game extends Engine{
    constructor() {
        super({ 
            backgroundColor: Color.ExcaliburBlue,
            width: 800,
            height: 600
        });
        this.start(ResourceLoader).then(() => this.startGame());

        Physics.useArcadePhysics();
        Physics.gravity = new Vector(0, 900);
        
    }

    startGame(){
        this.addScene('Startscherm',new StartScreen())
        this.addScene('Level',new Level());
        this.goToScene('Startscherm')

        this.addScene('Eindscherm', new EndScreen())
            
    }
}

new Game()
