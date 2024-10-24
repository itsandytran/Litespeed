import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import textStyles from "@constants/textStyles"

import { AddOnType, MenuItemType, sampleOrderItems } from "@lib/sample-data"
import { OrderItem } from "@components/order/OrderItem"

/**
 * Renders an individual order item.
 * 
 * @param menuItem - The menu item associated with the order.
 * @param quantity - The quantity of the item ordered.
 * @param addOns - The add-ons selected for the item (optional).
 * 
 * @returns An OrderItem component with the given props.
 */
const renderOrderItem = (props: {
  menuItem: MenuItemType
  quantity: number
  addOns?: AddOnType[]
}) => {
  return (
    <OrderItem
      key={props.menuItem.name}
      menuItem={props.menuItem}
      quantity={props.quantity}
      addOns={props.addOns}
    />
  )
}

/**
 * The OrderSummary component displays a summary of the current order,
 * including all ordered items with their respective quantities and add-ons.
 * 
 * @returns A view displaying the order number and a list of ordered items.
 */
const OrderSummary: FC = () => {
  const orderItems = sampleOrderItems.map(renderOrderItem)
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
