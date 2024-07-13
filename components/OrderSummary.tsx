import { View, Text, StyleSheet } from "react-native"

import CheckOutButton from "./CheckOutButton"

function OrderSummary() {
  return (
    <View style={styles.background}>
      <Text style={{ color: "white", fontSize: 16, padding: 8 }}>
        Customer Ticket Number: 46
      </Text>
      <Text style={{ color: "white", fontSize: 16, padding: 8 }}>
        OrderItem 1
      </Text>
      <Text style={{ color: "white", fontSize: 16, padding: 8 }}>
        OrderItem 2
      </Text>
      <Text style={{ color: "white", fontSize: 16, padding: 8 }}>
        OrderItem 3
      </Text>

      {/* Check-out buttons */}
      <View style={styles.row}>
        <CheckOutButton buttonName="Cash" />
        <CheckOutButton buttonName="Card" />
      </View>

      {/* Cash Amount Prompt */}
      <View style={styles.row}>
        <CheckOutButton buttonName="39.90" />
        <CheckOutButton buttonName="40" />
        <CheckOutButton buttonName="50" />
        <CheckOutButton buttonName="60" />
      </View>
    </View>
  )
}

export default OrderSummary

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#232429",
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 2,
  },
})
