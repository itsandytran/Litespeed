import { View, Text, StyleSheet } from "react-native"

import CheckOutButtons from "./CheckOutButtons"
import { OrderItem } from "./OrderItem"
import Colors from "../constants/colors"
import CustomerInstructions from "./CustomerInstructions"

function OrderSummary() {
  return (
    <View style={styles.background}>
      <View>
        <View style={styles.OrderNumberContainer}>
          <Text style={styles.OrderNumberText}>Order no. 123</Text>
        </View>
        <View style={styles.OrderNumberContainer}>
          <OrderItem name="Ham Burger" quantity={4} price={50.0} />
        </View>
        <View style={styles.OrderNumberContainer}>
          <OrderItem name="Ham Burger" quantity={4} price={50.0} />
        </View>
        <View style={styles.OrderNumberContainer}>
          <OrderItem name="Ham Burger" quantity={4} price={50.0} />
        </View>
        <CustomerInstructions />
      </View>
      <View>
        <CheckOutButtons />
      </View>
    </View>
  )
}

export default OrderSummary

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.gray1,
    justifyContent: "space-between",
  },
  OrderNumberContainer: {
    borderBottomColor: Colors.gray3,
    borderBottomWidth: 2,
  },
  OrderNumberText: {
    padding: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
})
