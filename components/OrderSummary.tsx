import { View, Text, StyleSheet } from "react-native"

import CheckOutButtons from "./CheckOutButtons"
import { OrderItem, OrderItemDetails } from "./OrderItem"
import Colors from "../constants/colors"
import CustomerInstructions from "./CustomerInstructions"

const sampleData: OrderItemDetails[] = [
  {
    name: "Poutine",
    price: 7,
    quantity: 1,
    specialInstructions: "more gravy",
  },
  {
    name: "Ham Burger",
    price: 7.5,
    quantity: 2,
  },
  {
    name: "Ham Burger",
    price: 7.5,
    quantity: 1,
    specialInstructions: "add tomato",
  },
  {
    name: "Deep Fried Cheese Curds",
    price: 10,
    quantity: 1,
  },
]

function OrderSummary() {
  return (
    <View style={styles.background}>
      <OrderItem name={"Ham Burger"} quantity={4} price={50.0} />
      <OrderItem name={"Ham Burger"} quantity={4} price={50.0} />
      <OrderItem name={"Ham Burger"} quantity={4} price={50.0} />
      <OrderItem name={"Ham Burger"} quantity={4} price={50.0} />
      <CustomerInstructions />
      <CheckOutButtons />
    </View>
  )
}

export default OrderSummary

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.gray1,
  },
})
