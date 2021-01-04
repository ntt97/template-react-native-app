import { Navigation } from 'react-native-navigation';
import App from './src/App';
Navigation.registerComponent('Home', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        options: { topBar: { visible: false, height: 0 } },
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
    layout: {
      orientation: 'portrait',
    },
  });
});
