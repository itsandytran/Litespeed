import { FC } from "react"
import {
  Text,
  Modal,
  View,
  StyleSheet,
  GestureResponderEvent,
} from "react-native"

import { MenuItemType } from "@lib/sample-data"
import Button from "./common/Button"
import Colors from "@constants/colors"
import MenuItem from "./menu/MenuItem"

type ItemCustomizationProps = {
  item?: MenuItemType
  onConfirm?: (event: GestureResponderEvent) => void
  onCancel?: (event: GestureResponderEvent) => void
}

const ItemCustomization: FC<ItemCustomizationProps> = ({
  item,
  onConfirm = () => {},
  onCancel = () => {},
}) => {
  const options = item?.customizatioinOptions ?? []
  const customizationOptions = options.map(({ name, price, color }) => (
    <MenuItem key={name} name={name} price={price} color={color} />
  ))

  return (
    <View style={{ display: item ? "flex" : "none" }}>
      <Modal transparent={true} visible={!!item}>
        <View style={[styles.container, styles.centeredView, styles.shadow]}>
          {item && options.length > 0 ? (
            <>
              <Text style={styles.itemNameText}>{item.name} Options</Text>
              <View style={styles.optionsRow}>{customizationOptions}</View>
            </>
          ) : (
            // TODO: style as an alert
            <Text style={styles.itemNameText}>No menu item selected.</Text>
          )}
          <Button text="OK" action={onConfirm} />
          <Button text="Cancel" action={onCancel} />
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
