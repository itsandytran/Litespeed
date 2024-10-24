import textStyles from "@constants/textStyles"
import { FC } from "react"
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"

import { MenuItemType } from "@lib/sample-data"

/**
 * Props for the MenuItem component, extending the MenuItemType with an optional onPress handler
 * - `name`   : String representing name of the menu item
 * - `price`  : Number representing the price of the menu item
 * - `color`  : String representing the background color of the menu item's button in hexcode formatting
 * - `addOns` : Array of AddOnType containing add-ons available for the menu item (optional)
 * - `onPress`: Event handler to be executed when menu item is pressed (optional)
 */
type MenuItemProps = MenuItemType & {
  onPress?: (event: GestureResponderEvent) => void
}

/**
 * The MenuItem component represents an individual menu item.
 * It displays the item's name, price, and handles press events including
 * opening a customization menu for add-ons and adding menu items to orders
 * 
 * @param name - The name of the menu item
 * @param price - The price of the menu item
 * @param color - The background color of the item's button
 * @param addOns - Optional array of add-ons. If provided, a customization menu is displayed when pressed.
 * @param onPress - Optional press handler (TODO: Should not be optional)
 * 
 * @returns A Pressable menu item component with name, price, and onPress behaviour
 */
const MenuItem: FC<MenuItemProps> = ({
  name,
  price,
  color,
  addOns = [],
  onPress = () => {},
}) => {
  return (
    <Pressable
      onPress={(event) => {
        if (addOns.length > 0) onPress(event)
      }}
    >
      <View style={[styles.buttonContainer, { backgroundColor: color }]}>
        <Text style={[textStyles.bold, { flex: 1 }]}>{name}</Text>
        <Text style={textStyles.price}>{price.toFixed(2)}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 128,
    width: 128,
    borderRadius: 6,
    padding: 10,
  },
})

export default MenuItem
