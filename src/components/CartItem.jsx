import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const CartItem = ({ cartItem }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {cartItem.title} - {cartItem.quantity}
        </Text>
        <Text style={styles.brand}>{cartItem.brand}</Text>
        <Text style={styles.price}>${cartItem.price}</Text>
      </View>
      <Entypo
        name="trash"
        size={30}
        color="black"
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
