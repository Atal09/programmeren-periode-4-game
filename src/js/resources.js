import { ImageSource, Sound, Resource, Loader } from "excalibur";
import playerImage from "../images/player.png";
import backgroundImage from "../images/background.png";
import enemyImage from "../images/enemy.png";

const Resources = {
  Player: new ImageSource(playerImage),
  Background: new ImageSource(backgroundImage),
  Enemy: new ImageSource(enemyImage),
};

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)


export { Resources, ResourceLoader };
