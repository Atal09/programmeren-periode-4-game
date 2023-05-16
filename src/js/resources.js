import { ImageSource, Sound, Resource, Loader } from "excalibur";
import fishImage from "../images/fish.png";
import SansImage from "../images/Sans.png";
import BackgroundImage from "../images/background.png";

const Resources = {
  Fish: new ImageSource(fishImage),
  Sans: new ImageSource(SansImage),
  Background: new ImageSource(BackgroundImage) 
};
const ResourceLoader = new Loader([Resources.Fish, Resources.Sans, Resources.Background]);

export { Resources, ResourceLoader };
