import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"

import { OrderItemType } from "@lib/sample-data"
import textStyles from "@constants/textStyles"

/**
 * Props for the OrderItem component.
 * - `menuItem`: The menu item added to the order
 * - `quantity`: Number representing the quantity of the menu item
 * - `addOns?`: Optional list of add-ons to customize the menu item
 */
export type OrderItemProps = OrderItemType

/**
 * The OrderItem component displays a row containing the name of a menu item,
 * its quantity, and the item's price.
 * If applicable, any selected add ons for this menu item are displayed in a row underneath
 *
 * Format: <Quantity>   <Menu Item Name>   <Price>
 *                          <Add Ons>
 *
 * @param menuItem
 * @param quantity
 * @param addOns
 * @returns
 */
const OrderItem: FC<OrderItemProps> = ({ menuItem, quantity, addOns = [] }) => {
  return (
    <View style={styles.underlinedRow}>
      {/* The item's quantity is displayed on the leftmost column */}
      <View style={styles.quantityColumn}>
        <Text style={textStyles.regular}>{quantity}</Text>
      </View>

      {/* The item's name is displayed in the middle column
          If any add-ons were selected for this item, they are displayed in a row below */}
      <View style={styles.itemColumn}>
        <Text style={textStyles.regular}>{menuItem.name}</Text>
        {addOns.length > 0 && (
          <Text style={textStyles.italic}>
            {addOns.map((option) => option.name).join(", ")}
          </Text>
        )}
      </View>

      {/* The items' price is displayed on the rightmost column */}
      <View style={styles.priceColumn}>
        <Text style={textStyles.regular}>{menuItem.price * quantity}</Text>
      </View>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  underlinedRow: {
    flexDirection: "row",
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomColor: "#D2D2D2",
    borderBottomWidth: 0.5,
  },
  quantityColumn: {
    width: "10%",
  },
  itemColumn: {
    width: "70%",
  },
  priceColumn: {
    width: "20%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
})
