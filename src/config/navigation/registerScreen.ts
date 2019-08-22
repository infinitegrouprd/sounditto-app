import { Navigation } from "react-native-navigation";

import * as screens from './screenNames';
import Listening from "@screens/listening";

export default function registerScreens(): void {
  Navigation.registerComponent(screens.LISTENING ,() => Listening)
}
