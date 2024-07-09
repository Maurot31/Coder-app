import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../fetures/shop/ShopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();
  const handleNavigate = () => {
    dispatch(setCategorySelected(category));
    navigation.navigate("ItemListCategory", { category });
  };

  return (
    <Card style={styles.cardContainer}>
      <Pressable onPress={handleNavigate}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    backgroundColor: colors.blueGrotto,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: colors.white,
  },
});
