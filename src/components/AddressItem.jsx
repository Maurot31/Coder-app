import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { colors } from "../global/colors";

const AddressItem = ({ location, navigation }) => {
  const onChangeLocation = () => {
    navigation.navigate("Location Selector");
  };

  return (
    <Pressable
      style={styles.card}
      onPress={() => {}}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{location.address}</Text>
      </View>
      <Pressable onPress={onChangeLocation}>
        <Entypo
          name="location"
          size={30}
          color={colors.white}
        />
        <Text style={styles.text2}>Change</Text>
      </Pressable>
    </Pressable>
  );
};

export default AddressItem;

const styles = StyleSheet.create({
  card: {
    height: 100,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.blueGrotto,
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 17,
    color: colors.white,
    fontFamily: "Cascadia Code",
  },
  text2: {
    fontSize: 19,
    padding: 8,
    color: colors.white,
    fontFamily: "Cascadia Code",
  },
});
