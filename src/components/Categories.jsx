/* import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(category) => category}
        renderItem={({ item, index, separators }) => (
          <CategoryItem category={item} />
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
 */
