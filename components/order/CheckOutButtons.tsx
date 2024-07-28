import { View, Text, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

import CheckOutButton from "./CheckOutButton"
import Colors from "@constants/colors"

function CheckOutButtons() {
  // Display and update the time every second
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <View style={styles.checkOutContainer}>
      <View style={styles.orderTotalRow}>
        <Text style={styles.dateTimeText}>
          {date.toLocaleString("en-CA", {
            timeZone: "America/Toronto",
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
      <View style={[styles.checkOutButtonsRow, { paddingBottom: 20 }]}>
        <CheckOutButton buttonName="39.90" />
        <CheckOutButton buttonName="40" />
        <CheckOutButton buttonName="50" />
        <CheckOutButton buttonName="60" />
      </View>
    </View>
  )
}

export default CheckOutButtons

const styles = StyleSheet.create({
  checkOutContainer: {
    backgroundColor: Colors.gray2,
    paddingBottom: 5,
  },
  checkOutButtonsRow: {
    flexDirection: "row",
    paddingBottom: 4,
    paddingHorizontal: 8,
  },
  orderTotalRow: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  dateTimeText: {
    color: "black",
    fontSize: 20,
  },
  orderTotalText: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
})
