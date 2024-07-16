import { View, Text, StyleSheet } from "react-native"

import CheckOutButtons from "./CheckOutButtons"
import { OrderItem } from "./OrderItem"

function OrderSummary() {
  return (
    <View style={styles.background}>
      <Text style={{ color: "white", fontSize: 16, padding: 8 }}>
        Customer Ticket Number: 46
      </Text>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <CheckOutButtons />
    </View>
  )
}

export default OrderSummary

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#232429",
  },
})
