import textStyles from "@constants/textStyles"
import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"

import { sampleOrderItems } from "@lib/sample-data"
import { OrderItem } from "./OrderItem"

// TODO: Dynamically generate an Order Number.

const OrderSummary: FC = () => {
  const orderItems = sampleOrderItems.map(({ menuItem, quantity, addOns }) => {
    return (
      <OrderItem
        key={menuItem.name}
        menuItem={menuItem}
        quantity={quantity}
        addOns={addOns}
      />
    )
  })
  return (
    <View style={styles.background}>
      <Text style={textStyles.bold}>Order no. 134</Text>
      {orderItems}
    </View>
  )
}

export default OrderSummary

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    padding: 24,
    marginVertical: 18,
    width: 500,
  },
})
