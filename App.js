import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { colors } from "./src/global/colors.js";
import Header from "./src/components/Header.jsx";
import Home from "./src/screens/Home.jsx";
import ItemListCategory from "./src/screens/ItemListCategory.jsx";
import ItemDetail from "./src/screens/ItemDetail.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    CascadiaCode: require("./assets/CascadiaCode.ttf"),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            header: () => {
              return (
                <Header
                  title={
                    route.name === "Home"
                      ? "Categories"
                      : route.name === "ItemListCategory"
                      ? route.params.category
                      : "Detail"
                  }
                />
              );
            },
          })}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="ItemListCategory"
            component={ItemListCategory}
          />
          <Stack.Screen
            name="ItemDetail"
            component={ItemDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.babyBlue,
    alignItems: "center",
  },
});
