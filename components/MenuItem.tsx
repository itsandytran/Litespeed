import { View, Text, StyleSheet } from "react-native"

type MenuItemProps = {
  itemName: string
  itemPrice: string
  buttonColor: string
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <View style={[styles.button, {backgroundColor: props.buttonColor}]}>
      <View style={styles.itemName}>
        <Text style={styles.itemNameText}>{props.itemName}</Text>
      </View>
      <Text style={styles.itemPriceText}>{props.itemPrice}</Text>
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
