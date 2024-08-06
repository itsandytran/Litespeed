import { FC } from "react"
import { View, Text, StyleSheet } from "react-native"

import { MenuItemType } from "@lib/sample-data"

const MenuItem: FC<MenuItemType> = ({ name, price, color }) => {
  return (
    <View
      aria-label="menu item"
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text aria-label="name" style={[styles.itemName, styles.itemNameText]}>
        {name}
      </Text>
      <Text aria-label="price" style={styles.itemPriceText}>
        {price}
      </Text>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({
  button: {
    height: 130,
    width: 120,
    borderRadius: 7,
    padding: 10,
    margin: 2,
  },
  itemName: {
    flex: 1,
  },
  itemNameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemPriceText: {
    fontSize: 12,
    textAlign: "right",
  },
})
