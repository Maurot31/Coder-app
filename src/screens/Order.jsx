import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import OrderData from "../data/orders.json";
import OrderItem from "../components/OrderItem";

const Order = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={OrderData}
        keyExtractor={(orderItem) => orderItem.id.toString()}
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
