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

type MenuItemProps = MenuItemType & {
  onPress?: (event: GestureResponderEvent) => void
}

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
