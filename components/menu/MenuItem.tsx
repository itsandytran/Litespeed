import { FC } from "react"
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"

import { MenuItemType } from "@lib/sample-data"

type MenuItemProps = MenuItemType & {
  onPress?: (event: GestureResponderEvent) => void
}

const MenuItem: FC<MenuItemProps> = ({
  name,
  price,
  color,
  customizatioinOptions = [],
  onPress = () => {},
}) => {
  return (
    <Pressable
      onPress={(event) => {
        if (customizatioinOptions.length > 0) onPress(event)
      }}
    >
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
    </Pressable>
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
