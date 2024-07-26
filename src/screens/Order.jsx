import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import OrderItem from "../components/OrderItem";
import { useGetOrdersByUserQuery } from "../services/shopServices";

const Order = () => {
  const { data: OrderData, isLoading } = useGetOrdersByUserQuery();

  const fetchOrdersByUser = async () => {
    try {
      const sessionData = await getSession();
      const userEmail = sessionData.rows.item(0).email;
      useGetOrdersByUserQuery({ user: userEmail });
    } catch (error) {
      console.error("Error al obtener la sesión del usuario:", error);
    }
  };

  React.useEffect(() => {
    fetchOrdersByUser();
  }, []);

  return (
    <View>
      <FlatList
        data={OrderData}
        keyExtractor={(orderItem) => orderItem}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
});

export default Order;
