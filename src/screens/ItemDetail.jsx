import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useGetProductByIdQuery } from "../services/shopServices";
import { useDispatch } from "react-redux";
import { addCartItem } from "../fetures/cart/CartSlice";
import CustomButton from "../components/CustomButton";
import { colors } from "../global/colors";

const ItemDetail = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");
  const { productoId: idSelected } = route.params;
  const dispatch = useDispatch();
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(idSelected);

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  const handleAddCart = () => {
    dispatch(addCartItem({ ...product, quantity: 1 }));
  };

  return (
    <View style={styles.container}>
      <CustomButton
        onPress={() => navigation.goBack()}
        title="Back"
        color={colors.navyBlue}
        textColor={colors.babyBlue}
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
            <CustomButton
              title="Add to Cart"
              onPress={handleAddCart}
              color={colors.blueGrotto}
              textColor={colors.babyBlue}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageLandscape: {
    width: "45%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "CascadiaCode",
    color: colors.navyBlue,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: colors.navyBlue,
    marginBottom: 5,
  },
  price: {
    textAlign: "right",
    fontSize: 18,
    color: colors.navyBlue,
    fontWeight: "bold",
  },
});

export default ItemDetail;
