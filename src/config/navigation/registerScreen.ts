import { Navigation } from "react-native-navigation";
import  Listening  from '@screens/listening';
import  History  from '@screens/history';
import * as screens from './screenNames';

export default function registerScreens(): void {
  Navigation.registerComponent(screens.LISTENING ,() => Listening)
  Navigation.registerComponent(screens.HISTORY ,() => History)

}