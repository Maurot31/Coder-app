import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CategoryItem from "../components/CategoryItem";
import categories from "../data/categories.json";

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(category) => category}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
