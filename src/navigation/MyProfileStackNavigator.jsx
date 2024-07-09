import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MyProfile from "../screens/MyProfile";

const Stack = createNativeStackNavigator();

const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Profile"
        component={MyProfile}
      />
    </Stack.Navigator>
  );
};

export default MyProfileStackNavigator;

const styles = StyleSheet.create({});
