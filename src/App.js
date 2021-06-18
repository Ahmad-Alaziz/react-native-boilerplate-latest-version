import {Navigation as ReactNavigation} from 'react-native-navigation';

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

  startApplication = async () => {};
}

export default App;
