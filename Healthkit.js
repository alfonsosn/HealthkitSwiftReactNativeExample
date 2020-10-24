import { NativeModules, NativeEventEmitter } from 'react-native'

class Controller extends NativeEventEmitter {
  constructor(nativeModule) {
    super(nativeModule);

    this.requestAuthorization = nativeModule.requestAuthorization
  }
}

export default new Controller(NativeModules.Controller)
