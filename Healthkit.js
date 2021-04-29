import { NativeModules, NativeEventEmitter } from "react-native";

class Controller extends NativeEventEmitter {
  constructor(nativeModule) {
    super(nativeModule);

    this.requestAuthorization = nativeModule.requestAuthorization;
    this.createHKWorkout = async (healthKitWorkout) => {
      let data = false
      try {
         await nativeModule.createHKWorkout(
          healthKitWorkout.activityType,
          healthKitWorkout.startDate,
          healthKitWorkout.endDate,
          healthKitWorkout.totalEnergyBurned,
          healthKitWorkout.totalDistance,
          healthKitWorkout.distanceUnit,
          healthKitWorkout.metadata,
        );
        data = true
      } catch (e) {
        console.error(e);
      }
      return data;
    };
  }
}

export default new Controller(NativeModules.Controller);
