import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import { useGetProductsByCategoryQuery } from "../services/shopServices";
import { ActivityIndicator } from "react-native";

const ItemListCategory = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const { category: categorySelected } = route.params;
  const {
    data: productsFetched,
    error: errorFetched,
    isLoading,
  } = useGetProductsByCategoryQuery(categorySelected);
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
    const regexThreeOrMoreCharacters = /[a-zA-Z]{3,}/;
    const hasThreeOrMoreChar = regexThreeOrMoreCharacters.test(keyWord);
    if (!hasThreeOrMoreChar && keyWord.length) {
      setError("*Type 3 or more characters");
      return;
    }
    if (isLoading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    } else {
      setLoading(false);
      const productsFilter = productsFetched.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      );
      setProductsFiltered(productsFilter);
      setError("");
    }
  }, [keyWord, categorySelected, productsFetched, isLoading]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="black"
        />
      ) : (
        <>
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
        </>
      )}
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
