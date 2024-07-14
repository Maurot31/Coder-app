import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../fetures/cart/CartSlice";
import { removeAllCartItem } from "../fetures/cart/CartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeCartItem({ id: cartItem.id }));
  };

  const handleRemoveAllItems = () => {
    dispatch(removeAllCartItem({ id: cartItem.id }));
  };

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {cartItem.title} X {cartItem.quantity} unidades
        </Text>
        <Text style={styles.brand}>{cartItem.brand}</Text>
        <Text style={styles.price}>${cartItem.price}</Text>
      </View>
      <MaterialIcons
        name="delete"
        size={24}
        color="black"
        onPress={handleRemoveItem}
      />
      <MaterialIcons
        name="delete-forever"
        size={24}
        color="black"
        onPress={handleRemoveAllItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
  },

  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  brand: {
    fontSize: 14,
    color: "#888",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CartItem;
