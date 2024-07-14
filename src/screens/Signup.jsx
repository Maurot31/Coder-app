import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../global/colors";
import CustomButton from "../components/CustomButton";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../fetures/user/UserSlice";
import { signupSchema } from "../validations/singUpScheme";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const [triggerSignUp, result] = useSignUpMutation();

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
        })
      );
    }
  }, [result]);

  const onSubmit = () => {
    try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");
      const values = { email, password, confirmPassword };
      signupSchema.validateSync(values, { abortEarly: false });

      triggerSignUp({ email, password, returnSecureToken: true });
    } catch (error) {
      console.log("Error en el formulario de registro:");
      console.log(error.inner);

      error.inner.forEach((err) => {
        switch (err.path) {
          case "email":
            setErrorMail(err.message);
            break;
          case "password":
            setErrorPassword(err.message);
            break;
          case "confirmPassword":
            setErrorConfirmPassword(err.message);
            break;
          default:
            console.log("Error desconocido:", err.message);
            break;
        }
      });
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        <InputForm
          label={"email"}
          onChange={setEmail}
          error={errorMail}
        />
        <InputForm
          label={"password"}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <InputForm
          label={"confirm password"}
          onChange={setconfirmPassword}
          error={errorConfirmPassword}
          isSecure={true}
        />
        <CustomButton
          onPress={onSubmit}
          title="Send"
          color={colors.blueGrotto}
          textColor={colors.babyBlue}
        />
        <Text style={styles.sub}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

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
    fontFamily: "CascadiaCode",
  },
  sub: {
    fontSize: 14,
    fontFamily: "CascadiaCode",
    color: "black",
  },
  subLink: {
    fontSize: 14,
    color: "blue",
  },
});
