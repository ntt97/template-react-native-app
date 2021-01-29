import { Navigation } from 'react-native-navigation';
import { Keyboard } from 'react-native';
import { LOADING_PAGE, SIDE_MENU } from '@constants/index';
import { isIOS } from '@constants/platform';
import { store } from '@store/configureStore';
import { hideLoadingWithSaga, showLoadingWithSaga } from '@actions/loading.action';

const TEMP_COMPONENT_ID: Record<string, string> = {};
class NavigationActionsService {
  private static stackNavigation: any[] = [];
  private static navigation: any;
  private static instance: NavigationActionsService;
  private static defaultOptions = {
    topBar: {
      visible: false,
    },
    animations: {
      push: {
        waitForRender: true,
      },
    },
    sideMenu: {
      left: {
        shouldStretchDrawer: false,
        // animationVelocity: 200,
      },
      animationType: 'parallax', // defaults to none if not provided, options are 'parallax', 'door', 'slide', or 'slide-and-scale'
    },
  };

  static initInstance(navigation: any): NavigationActionsService {
    Navigation.setDefaultOptions({
      layout: {
        orientation: ['portrait'],
      },
    });
    if (!NavigationActionsService.instance) {
      NavigationActionsService.instance = new NavigationActionsService();
      Navigation.events().registerComponentDidAppearListener(({ componentId, componentName, passProps }) => {
        if (componentName != SIDE_MENU && componentName != LOADING_PAGE) {
          NavigationActionsService.navigation = componentId;
          TEMP_COMPONENT_ID[componentName] = componentId;
        }
      });
    }

    NavigationActionsService.navigation = navigation;
    NavigationActionsService.stackNavigation.push(navigation);
    return NavigationActionsService.instance;
  }

  public static toggleDrawer = (bool: boolean) =>
    Navigation.mergeOptions(NavigationActionsService.navigation, {
      sideMenu: {
        left: {
          visible: bool,
        },
      },
    });
  public static push = (screenName: string, passProps = {}) => {
    Navigation.push(NavigationActionsService.navigation, {
      component: {
        name: screenName,
        passProps,
        options: {
          topBar: {
            visible: false,
          },
          animations: {
            push: {
              enabled: true,
              waitForRender: true,
              content: isIOS
                ? {}
                : {
                    x: {
                      from: -1000,
                      to: 0,
                      duration: 250,
                    },
                  },
            },
            pop: isIOS
              ? {}
              : {
                  enabled: true,
                  content: {
                    x: {
                      from: 0,
                      to: -1000,
                      duration: 100,
                    },
                  },
                },
          },
          sideMenu: {
            left: {
              enabled: false,
            },
          },
        },
      },
    });
  };

  public static showLoading = () => {
    store.dispatch(showLoadingWithSaga());
  };
  public static hideLoading = () => {
    store.dispatch(hideLoadingWithSaga());
  };

  public static pop = () => {
    Keyboard.dismiss();
    Navigation.pop(NavigationActionsService.navigation);
  };
  public static popId = (screenName: string) => {
    Keyboard.dismiss();
    const id = TEMP_COMPONENT_ID[screenName];
    if (id) {
      Navigation.popTo(id);
    }
  };

  public static popToRoot = (screenName: string) => {
    Keyboard.dismiss();
    const id = TEMP_COMPONENT_ID[screenName];
    if (id) {
      Navigation.popToRoot(id);
    }
  };

  public static destroyScreen = () => {
    NavigationActionsService.stackNavigation.pop();
    const maximumStackLength = NavigationActionsService.stackNavigation.length;
    NavigationActionsService.navigation = NavigationActionsService.stackNavigation[maximumStackLength - 1];
  };
}

export default NavigationActionsService;
