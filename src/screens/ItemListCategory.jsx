import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-web";
import products from "../data/products.json";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";

const ItemListCategory = ({ route, navigation }) => {
  const { category: categorySelected } = route.params;

  const [keyWord, setKeyWord] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const regexDigits = /\d/;
    const hasDigits = regexDigits.test(keyWord);
    if (hasDigits) {
      setError("*error ");
      return;
    }

    console.log(error);

    const regexThreeOrMoreCharacters = /[a-zA-Z]{3,}/;
    const hasThreeOrMoreChar = regexThreeOrMoreCharacters.test(keyWord);

    if (!hasThreeOrMoreChar && keyWord.length) {
      setError("*Type 3 or more characters");
      return;
    }

    const productsPreFiltered = products.filter(
      (product) => product.category === categorySelected
    );
    const productsFilter = productsPreFiltered.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    );
    console.log(productsFilter);
    setProductsFiltered(productsFilter);
    setError("");
  }, [keyWord, categorySelected]);

  return (
    <View style={styles.container}>
      <Search
        error={error}
        onSearch={setKeyWord}
        goBack={() => navigation.goBack("")}
      />
      <Text>{error}</Text>
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            navigation={navigation}
          />
        )}
        keyExtractor={(producto) => producto.id}
      />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
