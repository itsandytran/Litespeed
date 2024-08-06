import { FC } from "react"
import { Text, Modal, View, StyleSheet } from "react-native"

import { ItemCustomizationOption } from "@lib/sample-data"
import Button from "./common/Button"
import Colors from "@constants/colors"
import MenuItem from "./menu/MenuItem"

type ItemCustomizationProps = {
  itemName: string
  options: ItemCustomizationOption[]
  visible?: boolean
}

const ItemCustomization: FC<ItemCustomizationProps> = ({
  itemName,
  options,
  visible = false,
}) => {
  const customizationOptions = options.map(({ name, price, color }) => (
    <MenuItem key={name} name={name} price={price} color={color} />
  ))

  return (
    <View style={{ display: visible ? "flex" : "none" }}>
      <Modal transparent={true} visible={visible}>
        <View style={[styles.container, styles.centeredView, styles.shadow]}>
          <Text style={styles.itemNameText}>{itemName} Options</Text>
          <View style={styles.optionsRow}>{customizationOptions}</View>
          <Button text="OK" />
        </View>
      </Modal>
    </View>
  )
}

export default ItemCustomization

const styles = StyleSheet.create({
  centeredView: {
    margin: "auto",
  },
  container: {
    borderBlockColor: "black",
    backgroundColor: "white",
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  optionsRow: {
    // (item width + 2 * item margin) * number of items = (120 + 2 * 2) * 4
    width: 496,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemNameText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 12,
  },
  shadow: {
    shadowColor: Colors.gray5,
    shadowOpacity: 1,
    shadowRadius: 64,
  },
})
