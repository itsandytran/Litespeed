import { FC } from "react"
import { View, Text, StyleSheet } from "react-native"

import { MenuItemType } from "@lib/sample-data"
import Keyed from "@lib/keyed"

const MenuItem: FC<MenuItemType & Keyed<string>> = ({ name, price, color }) => {
  return (
    <View style={[styles.button, { backgroundColor: color }]}>
      <View style={styles.itemName}>
        <Text style={styles.itemNameText}>{name}</Text>
      </View>
      <Text style={styles.itemPriceText}>{price}</Text>
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
