import { View, Text, StyleSheet } from "react-native"

import CheckOutButtons from "./CheckOutButtons"
import { OrderItem } from "./OrderItem"
import Colors from "../constants/colors"

function OrderSummary() {
  return (
    <View style={styles.background}>
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
