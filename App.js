import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import { Switch } from "react-native-gesture-handler";
import HealthkitController from "./Healthkit.js";
import styles from "./styles";

const CONSTANTS = {
  types: {
    cycling: "cycling",
    fencing: "fencing",
    running: "running",
  },
  range: {
    min: 60,
    max: 90,
  },
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const GenerateEmptyHKOjbect = (type) => {
  const { range } = CONSTANTS;
  const startDate = new Date();
  const duration = getRandomInt(20, 35)
  const endDate = new Date(startDate.getTime() + duration*60000);
  const metadata = {
    HKMetadataKeyIndoorWorkout: false,
    HKMetadataKeyCoachedWorkout: false,
  };
  return {
    activityType: type,
    distanceUnit: "miles",
    duration,
    endDate: endDate.toISOString(),
    startDate: startDate.toISOString(),
    totalEnergyBurned: getRandomInt(1, 250),
    totalDistance: getRandomInt(0, 2),
    metadata,
  };
};

const WorkoutCategoryButtons = ({ set }) =>
  Object.keys(CONSTANTS.types).map((key) => {
    return (
      <TouchableOpacity onPress={() => set(CONSTANTS.types[key])} key={key}>
        <View style={styles.categories.button}>
          <Text style={styles.categories.buttonTitle}>
            {CONSTANTS.types[key]}
          </Text>
        </View>
      </TouchableOpacity>
    );
  });

const RequestHealthkitPermissionsButton = () => {
  const requestHealthkit = () => {
    Alert.alert(
      "Healthkit Required",
      "To use this app you need to grant Healthkit access",
      [
        {
          text: "Request Permissions",
          onPress: () => HealthkitController.requestAuthorization(),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View>
      <TouchableOpacity onPress={requestHealthkit}>
        <View style={styles.button.container}>
          <Text style={styles.button.title}>Request Healthkit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const CreateHKWorkoutButton = ({ onPressHandler }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={[styles.button.container, styles.general.blackBackground]}>
          <Text style={[styles.button.title, styles.general.white]}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const HkContent = ({ hkObject = {} }) => {
  const { types } = CONSTANTS;
  let emoji;
  switch (hkObject.activityType) {
    case types.cycling:
      emoji = <Text style={styles.fonts.emoji}>🚴🏼‍♂️</Text>;
      break;
    case types.fencing:
      emoji = <Text style={styles.fonts.emoji}>🤺</Text>;
      break;
    case types.running:
      emoji = <Text style={styles.fonts.emoji}>🏃🏻‍♂️</Text>;
      break;
    default:

      break;
  }
  return (
    <View style={styles.app.body}>
      {emoji}
      <Text style={styles.fonts.workoutTitle}>Duration: {hkObject.duration} mins</Text>
      <Text style={styles.fonts.workoutTitle}>Calories: {hkObject.totalEnergyBurned} kcal</Text>
    </View>
  );
};

const PrimaryView = () => {
  const { types } = CONSTANTS;
  const [activityType, setActivityType] = useState(types.cycling);
  const hkObject = GenerateEmptyHKOjbect(activityType);

  const createHKWorkoutHandler = async () => {
    console.log('press')
  };

  return (
    <SafeAreaView style={styles.app.container}>
      <View style={styles.app.divider}>
        <Text style={styles.fonts.title}>React-Native Healthkit </Text>
        <Text style={styles.fonts.subtitle}>Sample App </Text>
      </View>
      <HkContent hkObject={hkObject} />
      <View style={styles.app.buttonGroupContainer}>
        <WorkoutCategoryButtons set={setActivityType} />
      </View>
      <CreateHKWorkoutButton onPressHandler={createHKWorkoutHandler} />
      <RequestHealthkitPermissionsButton />
    </SafeAreaView>
  );
};

export default function App() {
  return <PrimaryView />;
}
