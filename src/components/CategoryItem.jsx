import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";

const CategoryItem = ({ category, navigation }) => {
  return (
    <Card style={styles.cardContainer}>
      <Pressable
        onPress={() => navigation.navigate("ItemListCategory", { category })}
      >
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    backgroundColor: colors.blueGrotto,
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
  },
});
