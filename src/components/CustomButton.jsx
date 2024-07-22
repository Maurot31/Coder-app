import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const CustomButton = ({
  title,
  onPress,
  color = colors.blueGrotto,
  textColor = colors.babyBlue,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color, opacity: pressed ? 0.6 : 1 },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: "60%",
  },
  text: {
    textAlign: "center",
    fontSize: 22,
    fontFamily: "CascadiaCode",
  },
});

export default CustomButton;
