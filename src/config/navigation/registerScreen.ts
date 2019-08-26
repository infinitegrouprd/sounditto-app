import { Navigation } from 'react-native-navigation';
import Listening from '@screens/Audios/Listening';
import History from '@screens/Audios/History';
import * as screens from './screenNames';
import Results from '@screens/Audio/Results';

export default function registerScreens(): void {
  Navigation.registerComponent(screens.LISTENING, () => Listening);
  Navigation.registerComponent(screens.HISTORY, () => History);
  Navigation.registerComponent(screens.HISTORY, () => Results);
}
