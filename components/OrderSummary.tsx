import { View, Text, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

import CheckOutButton from "./CheckOutButton"

function OrderSummary() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

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

      <View style={styles.checkOutContainer}>
        <View style={styles.orderTotalRow}>
          <Text style={styles.dateTimeText}>
            {date.toLocaleString("en-CA", {
              timeZone: "EST",
              timeStyle: "short",
              dateStyle: "medium",
            })}
          </Text>
          <Text style={styles.orderTotalText}>39.90</Text>
        </View>
        <View style={styles.checkOutButtonsRow}>
          <CheckOutButton buttonName="Cash" />
          <CheckOutButton buttonName="Card" />
        </View>
        <View style={styles.checkOutButtonsRow}>
          <CheckOutButton buttonName="39.90" />
          <CheckOutButton buttonName="40" />
          <CheckOutButton buttonName="50" />
          <CheckOutButton buttonName="60" />
        </View>
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
  checkOutContainer: {
    backgroundColor: "#2F3135",
    paddingBottom: 5,
  },
  checkOutButtonsRow: {
    flexDirection: "row",
    paddingHorizontal: 2,
  },
  orderTotalRow: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  dateTimeText: {
    color: "white",
  },
  orderTotalText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
})
