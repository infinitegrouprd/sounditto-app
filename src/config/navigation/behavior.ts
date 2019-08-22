import { Navigation } from "react-native-navigation";
import * as screens from "../screens";
import { icons } from "@styles/imagesUris";
import { colors } from "@styles/colors";
import { deviceWidth } from "@styles/globalStyles";
import { deviceHeight } from "@styles/marginLayout";

export function defaultProps() {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      style: "light", // it can be dark too,
      hideWithTopBar: false,
      blur: false
    },
    layout: {
      direction: "ltr", // Supported directions are: 'rtl', 'ltr'
      orientation: ["portrait"] // An array of supported orientations ["landscape"]
    },
    popGesture: true,
    modalPresentationStyle: "overFullScreen", // Supported styles are: 'formSheet', 'pageSheet', 'overFullScreen', 'overCurrentContext', 'currentContext', 'popover', 'fullScreen' and 'none'. On Android, only overCurrentContext and none are supported.
    topBar: {
      barStyle: "default", // it can be black
      visible: false,
      animate: false,
      hideOnScroll: false,
      drawBehind: false,
      noBorder: false,
      searchBar: false,
      searchBarHiddenWhenScrolling: false,
    },
    bottomTabs: {
      visible: true,
      animate: true, // Controls whether BottomTabs visibility changes should be animated
      currentTabIndex: 0,
      drawBehind: false,
      backgroundColor: colors.brandSecondary,
      barStyle: "default", // 'black',
      translucent: false,
      hideShadow: false
    },
    sideMenu: {
      left: {
        shouldStretchDrawer: false, // defaults to true, when false sideMenu contents not stretched when opened past the width
        // animationVelocity: 2500, // defaults to 840, high number is a faster sideMenu open/close animation
        width: deviceWidth * 0.8,
        height: deviceHeight * 0.8,
        visible: false,
        enabled: true
      },
      right: {
        shouldStretchDrawerk: false, // defaults to true, when false sideMenu contents not stretched when opened past the width
        // animationVelocity: 2500, // defaults to 840, high number is a faster sideMenu open/close animation
        visible: false,
        enabled: false
      }
    },
    overlay: {
      interceptTouchOutside: true,
      handleKeyboardEvents: true
    }
  });
}
