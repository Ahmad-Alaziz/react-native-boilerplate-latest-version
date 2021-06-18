import {Navigation as ReactNavigation} from 'react-native-navigation';
import AppNavigation from './navigation';

class App {
  constructor() {
    this.listenToNativeAppLaunch = this.listenToNativeAppLaunch.bind(this);
    this.startApplication = this.startApplication.bind(this);
  }

  listenToNativeAppLaunch() {
    ReactNavigation.events().registerAppLaunchedListener(async () => {
      await this.startApplication();
    });
  }

  startApplication = async () => {
    const appNavigation = new AppNavigation();
    appNavigation.initializeScreen();
    await appNavigation.setRootScreen(); // you can specify the start screen with param
  };
}

export default App;
