import React, { useEffect, useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { useGetProductByIdQuery } from "../services/shopServices";
import { ActivityIndicator } from "react-native";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { addCartItem } from "../fetures/cart/CartSlice";

const ItemDetail = ({ route, navigation }) => {
  const { productId: idSelected } = route?.params || {};
  const [loading, setLoading] = useState(true);
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(idSelected);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    } else {
      setLoading(false);
    }
  }, [isLoading]);

  const handleAddCart = () => {
    dispatch(addCartItem);
    dispatch(addCartItem({ ...product, quantity: 1 }));
  };

  const orientation =
    Dimensions.get("window").width > Dimensions.get("window").height
      ? "landscape"
      : "portrait";

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="black"
        />
      )}
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
      {product && (
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
            <Button
              title="Add to Cart"
              onPress={handleAddCart}
            />
          </View>
        </View>
      )}
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
  button: {
    padding: 10,
    backgroundColor: colors.blueGreen,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
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
