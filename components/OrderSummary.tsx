import { OrderItem } from "./OrderItem"
import { sampleOrderItems } from "@lib/sample-data"
import { View, Text, StyleSheet } from "react-native"
import CheckOutButtons from "./CheckOutButtons"
import Colors from "@constants/colors"
import CustomerInstructions from "./CustomerInstructions"

function OrderSummary() {
  const orderItems = sampleOrderItems.map(
    ({ menuItem, quantity, itemCustomization }) => {
      return (
        <OrderItem
          key={menuItem.name}
          menuItem={menuItem}
          quantity={quantity}
          itemCustomization={itemCustomization}
        />
      )
    }
  )

  return (
    <View style={styles.background}>
      <View>
        <View style={styles.OrderNumberContainer}>
          <Text style={styles.OrderNumberText}>Order no. 123</Text>
        </View>
        {orderItems}
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
