import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.navyBlue,
    height: 110,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.5)",
    elevation: 5,
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.white,
    fontFamily: "CascadiaCode",
  },
});
