import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../global/colors";
import InputForm from "../components/InputForm";
import CustomButton from "../components/CustomButton";
import { useSignInMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../fetures/user/UserSlice";
import { insertSession } from "../persistence";
import { Platform } from "react-native";
import { setUser } from "../fetures/user/UserSlice";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const [triggerSignIn, result] = useSignInMutation();

  useEffect(() => {
    if (result?.data && result.isSuccess) {
      (async () => {
        try {
          if (Platform.OS !== "web") {
            const response = await insertSession({
              email: result.data.email,
              localId: result.data.localId,
              token: result.data.idToken,
            });
          }
          dispatch(
            setUser({
              email: result.data.email,
              idToken: result.data.idToken,
              localId: result.data.localId,
            })
          );
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [result]);

  const onSubmit = () => {
    triggerSignIn({ email, password, returnSecureToken: true });
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Login to start</Text>
        <InputForm
          label={"email"}
          onChange={setEmail}
          error={""}
        />
        <InputForm
          label={"password"}
          onChange={setPassword}
          error={""}
          isSecure={true}
        />
        <CustomButton
          onPress={onSubmit}
          title="Send"
          color={colors.blueGrotto}
          textColor={colors.babyBlue}
        />
        <Text style={styles.sub}>Not have an account?</Text>

        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
  },
  sub: {
    fontSize: 14,
    color: "black",
  },
  subLink: {
    fontSize: 14,
    color: "blue",
  },
});
