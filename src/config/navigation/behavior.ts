import { Navigation } from "react-native-navigation";
import { icons } from "@styles/imagesUris";
import { colors } from "@styles/colors";
import { deviceWidth } from "@styles/globalStyles";
import { deviceHeight } from "@styles/marginLayout";
import { LISTENING, HISTORY } from "./screenNames";
import { bottomBar } from "@styles/imagesUris";

export function defaultProps() {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      style: "light", // it can be dark too,
    },
    layout: {
      orientation: ["portrait"] // An array of supported orientations ["landscape"]
    },
    popGesture: true,
    topBar: {
      visible: false,
      drawBehind: false,
    },
    bottomTabs: {
      visible: true,
      animate: true, // Controls whether BottomTabs visibility changes should be animated
      currentTabIndex: 0,
      drawBehind: false,
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
    },
  });
}

export const defaultNavigation = () => {
  Navigation.setRoot({
    root:{
      bottomTabs: {
        children: [
          {
            component: {
              id: LISTENING,
              name: LISTENING,
              options: {
                  bottomTab: {
                    text: 'listening',
                    icon: bottomBar.listening.uri,
                    iconColor: colors.branSecondaryDeep,
                    selectedIconColor: colors.brandSecondaryLight
                  }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: HISTORY,
                    name: HISTORY,
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: 'history',
                  icon: bottomBar.history.uri,
                  iconColor: colors.branSecondaryDeep,
                  selectedIconColor: colors.brandSecondaryLight

                }
              }
            }
          }
        ],
        options: {
          bottomTabs: {
            backgroundColor: colors.brandSecondary,

          }
        }
      }
    }
  })
}