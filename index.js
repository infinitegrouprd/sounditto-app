/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { Navigation } from "react-native-navigation";
import registerScreens from "@config/navigation/registerScreen";
// import "./src/config/sentry";
import { LISTENING } from "@config/navigation/screenNames";

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root:{
      component:{
        id: LISTENING,
        name: LISTENING
      }
    }
  })
});
