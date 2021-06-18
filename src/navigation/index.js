import {Navigation as ReactNavigation} from 'react-native-navigation';
import Screens from '../screens';

class Navigation extends Screens {
  #startScreenComponentName = 'Splash';

  initializeScreen = () => {
    const screenComponents = this.getScreenComponents();
    this.registerScreen(screenComponents);
  };

  async setRootScreen(screenComponentName = null): Promise<void> {
    const name = screenComponentName || this.#startScreenComponentName;
    if (this.existsScreenComponent(name)) {
      return ReactNavigation.setRoot({
        root: {
          component: {
            name,
          },
        },
      });
    }
    // eslint-disable-next-line no-console
    return console.error("The screen component doesn't exist");
  }

  registerScreen = (componentScreen, componentProvider) =>
    componentScreen.map(screen => {
      const screenName = this.getFnName(screen);

      return ReactNavigation.registerComponent(
        screenName,
        () => (typeof componentProvider === 'function' ? componentProvider(screen) : screen),
        typeof componentProvider === 'function' ? () => screen : undefined,
      );
    });
}

export default Navigation;
