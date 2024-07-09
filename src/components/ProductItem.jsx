import { Image, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";

import { useDispatch } from "react-redux";
import { setItemSelected } from "../fetures/shop/ShopSlice";

const ProductItem = ({ product, navigation }) => {
  const dispatch = useDispatch();

  const handleNavigate = () => {
    dispatch(setItemSelected(product.title));
    navigation.navigate("ItemDetail", { productoId: product.id });
  };

  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={handleNavigate}
      >
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  additionalStylesCard: {
    height: 140,
    width: 320,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.navyBlue,
    justifyContent: "space-between",
  },
  textCategory: {
    color: colors.babyBlue,
    flex: 1,
    marginRight: 10,
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
  },
});
