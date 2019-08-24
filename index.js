/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { Navigation } from "react-native-navigation";
import registerScreens from "@config/navigation/registerScreen";
// import "./src/config/sentry";
import { LISTENING } from "@config/navigation/screenNames";
import { defaultProps, defaultNavigation } from "./src/config/navigation/behavior";

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  // defaultProps();
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: false
    }
  })
  defaultNavigation();
});
