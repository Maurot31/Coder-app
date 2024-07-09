import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const SubmitButton = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: "60%",
    backgroundColor: colors.blueGrotto,
  },
  text: {
    fontSize: 22,
    color: colors.babyBlue,
    fontFamily: "CascadiaCode",
  },
});
