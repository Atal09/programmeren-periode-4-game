import { ImageSource, Sound, Resource, Loader } from "excalibur";
import playerImage from "../images/dino.png";
import backgroundImage from "../images/background.png";
import enemyImage from "../images/enemy.png";
import StartbuttonImage from "../images/Startbutton.png";
import GameOverImage from "../images/GameOver.png";
import rockImage from '../images/Rock.png'

const Resources = {
  Player: new ImageSource(playerImage),
  Background: new ImageSource(backgroundImage),
  Enemy: new ImageSource(enemyImage),
  StartButton : new ImageSource (StartbuttonImage),
  GameOver: new ImageSource(GameOverImage),
  Rock: new ImageSource(rockImage),

};

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)


export { Resources, ResourceLoader };
