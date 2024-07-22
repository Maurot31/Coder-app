import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import OrderItem from "../components/OrderItem";
import { useGetOrdersByUserQuery } from "../services/shopServices";

const Order = () => {
  const { data: OrderData, isLoading } = useGetOrdersByUserQuery(
    "maurotoledopc@gmail.com"
  );
  //if(!isLoading){
  console.log(OrderData);
  //}

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
