import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import allProducts from "../data/products.json";

const ItemDetail = ({ route, navigation }) => {
  const { productId: idSelected } = route.params;
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    );
    setProduct(productSelected);
  }, [idSelected]);

  console.log(product);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.goBack()}
        title="Back"
      />
      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.mainContainer
              : styles.mainContainerLandscape
          }
        >
          <Image
            source={{ uri: product.images[0] }}
            style={
              orientation === "portrait" ? styles.image : styles.imageLandscape
            }
            resizeMode="cover"
          />
          <View
            style={
              orientation === "portrait"
                ? styles.textContainer
                : styles.textContainerLandscape
            }
          >
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Add to Cart" />
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  mainContainer: {
    marginTop: 30,
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  imageLandscape: {
    width: "45%",
    height: 200,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    marginBottom: 10,
  },
  price: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});

export default ItemDetail;
