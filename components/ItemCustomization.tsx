import { FC } from "react"
import { Text, Modal, View, StyleSheet } from "react-native"

import { ItemCustomizationOption } from "@lib/sample-data"
import MenuItem from "./MenuItem"

type ItemCustomizationProps = {
  itemName: string
  options: ItemCustomizationOption[]
  visible?: boolean
}

const ItemCustomization: FC<ItemCustomizationProps> = ({
  itemName,
  options,
  visible = true,
}) => {
  const customizationOptions = options.map(({ name, price, color }) => (
    <MenuItem key={name} name={name} price={price} color={color} />
  ))

  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.background}>
        <Text style={styles.itemNameText}>{itemName} Options</Text>
        <View style={styles.optionsRow}>{customizationOptions}</View>
      </View>
    </Modal>
  )
}

export default ItemCustomization

const styles = StyleSheet.create({
  centeredView: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //marginTop: 22,
  },
  background: {
    borderBlockColor: "black",
    backgroundColor: "white",
    borderWidth: 2,
    padding: 12,
    margin: 12,
    borderRadius: 10,
    //shadowColor: Colors.gray5,
    //shadowOffset: { width: 0, height: 4 },
    //shadowOpacity: 1,
    //shadowRadius: 0,
  },
  optionsRow: {
    flexDirection: "row",
  },
  itemNameText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 12,
  },
})
