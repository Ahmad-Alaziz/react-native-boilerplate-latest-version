import SplashScreen from './Splash';

export default class Screens {
  #screenComponents = [];

  constructor() {
    this.setScreenComponents(SplashScreen);
  }

  getScreenComponents() {
    return this.#screenComponents;
  }

  setScreenComponents(...screenComponents) {
    this.#screenComponents = [...this.#screenComponents, ...screenComponents];
  }

  existsScreenComponent(screenName) {
    return this.getScreenComponents().every(
      screenComponent => this.getFnName(screenComponent) === screenName,
    );
  }

  getFnName = f => {
    const fn = Object(f);
    const F = typeof fn === 'function';
    const N = fn.name;
    const S = F && ((N && ['', N]) || fn.toString().match(/function ([^(]+)/));
    return (!F && 'not a function') || (S && S[1]) || 'anonymous';
  };
}
