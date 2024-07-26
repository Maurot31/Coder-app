import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import { useSelector } from "react-redux";
import { getSession } from "../persistence";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../fetures/user/UserSlice";

const Navigator = () => {
  const { user } = useSelector((state) => state.auth.value);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const response = await getSession();
        if (response.rows._array.length) {
          const user = response.rows._array[0];
          console.log({ user });
          dispatch(
            setUser({
              email: user.email,
              localId: user.localId,
              idToken: user.token,
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
