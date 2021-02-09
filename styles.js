import { StyleSheet } from "react-native";

const fonts = { 
  title: {
    fontSize: 30,
  },
  emoji: {
    fontSize: 200,
    textAlign: 'center',
  },
  workoutTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
  }
}

const general = StyleSheet.create({
  blackBackground: {
    backgroundColor: 'black',
  },
  white: {
    color: 'white',
  }
})

const categories = StyleSheet.create({
  button: {
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    height: 100,
    width: 100,
  },
  buttonTitle: {
    textAlign: "center",
  },
})

const button = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
})

const app = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonGroupContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  divider: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginHorizontal: 5,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default {
  app,
  button,
  categories,
  fonts,
  general,
};
