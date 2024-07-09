import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";

const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
  const [input, setInput] = useState("");

  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        placeholderTextColor={colors.blueGrotto}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  subtitle: {
    width: "90%",
    fontSize: 16,
    color: colors.navyBlue,
    marginBottom: 5,
  },
  error: {
    fontSize: 14,
    color: "red",
    fontStyle: "italic",
  },
  input: {
    width: "90%",
    borderBottomWidth: 2,
    borderBottomColor: colors.blueGrotto,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: colors.navyBlue,
  },
});
