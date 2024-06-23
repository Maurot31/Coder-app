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
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 50,
    fontFamily: "CascadiaCode",
  },
});
