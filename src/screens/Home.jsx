import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CategoryItem from "../components/CategoryItem";
import { useGetCategoriesQuery } from "../services/shopServices";

const Home = ({ navigation, route }) => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
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
