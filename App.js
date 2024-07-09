import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/global/colors.js";
import Navigator from "./src/navigation/Navigator.jsx";
import { Provider } from "react-redux";
import store from "./src/store/index.js";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    CascadiaCode: require("./assets/CascadiaCode.ttf"),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    backgroundColor: colors.babyBlue,
  },
});
