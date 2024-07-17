import { View, Text, StyleSheet } from "react-native"

import CheckOutButtons from "./CheckOutButtons"
import { OrderItem } from "./OrderItem"
import Colors from "../constants/colors"
import CustomerInstructions from "./CustomerInstructions"

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
