import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopServices";
import { getSession } from "../persistence";

const Cart = () => {
  const { items: CartData, total } = useSelector((state) => state.cart.value);

  const [triggerPostOrder, result] = usePostOrderMutation();

  const onConfirmOrder = async () => {
    try {
      const sessionData = await getSession();
      const userEmail = sessionData.rows.item(0).email;

      triggerPostOrder({
        items: CartData,
        user: userEmail,
        total,
      });
    } catch (error) {
      console.error("Error al obtener la sesión del usuario:", error);
    }
  };

  const totalToShow = CartData.length > 0 ? total : 0;

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
        keyExtractor={(producto) => producto.id}
      />

      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.button}
          onPress={onConfirmOrder}
        >
          <Text style={styles.buttonText}>Confirm Order</Text>
        </Pressable>
        <Text style={styles.totalText}>Total: $ {totalToShow}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 100,
  },
  bottomContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
