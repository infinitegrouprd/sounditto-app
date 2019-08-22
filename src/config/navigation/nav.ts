import { Navigation, Options } from "react-native-navigation";

export function push(componentId: string, options : Options, passProps : any) {
  Navigation.push(componentId, {
    component: {
      id: componentId,
      name: componentId,
      options: {
        ...options,
        topBar: {
          visible: false,
          height: 0
        },
        bottomTabs: {
          visible: false,
          drawBehind: true
        }
      },
      passProps
    }
  });
}

export function pop(componentId: string, options?: Options) {
  Navigation.pop(componentId, options);
}

export function popTo(componentId: string, options?: Options) {
  Navigation.popTo(componentId, options);
}

export function popToRoot(componentId: string, options?: Options) {
  Navigation.popToRoot(componentId, options);
}

export function setNewStack(componentId: string, screenName: string, options?: Options) {
  Navigation.setStackRoot(componentId, [
    {
      component: {
        id: screenName,
        name: screenName,
        options: {
          ...options,
          animations: {
            setStackRoot: {
              enabled: true
            },
          },
          topBar: {
            visible: false,
            drawBehind: true,
          },
          bottomTabs: {
            visible: false,
            drawBehind: true
          },
          sideMenu: {
            left: {
              visible: false,
              enabled: false
            }
          }
        }
      }
    }
  ]);
}

export function showModal(componentId: string, options?: Options, passProps?: any){
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: componentId,
            name: componentId,
            passProps,
            options: {
              ...options
            }
          }
        }
      ]
    }
  });
}

export function dismissModal(componentId: string , options?: Options) {
  Navigation.dismissModal(componentId, options);
}

export function dismissAllModals() {
  Navigation.dismissAllModals();
}

export function mergeOptions(componentId: string, options?: Options) {
  Navigation.mergeOptions(componentId, {
    options: {
      ...options
    }
    // topBar: {
    //   visible: true,
    //   title: {
    //     text: 'Title'
    //   }
    // },
    // bottomTabs: {

    // },
    // bottomTab: {

    // },
    // sideMenu: {

    // },
    // overlay: {

    // }
  });
}
