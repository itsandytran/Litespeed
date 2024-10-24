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
import { MenuItem } from "./menu/MenuItem"

type CustomizationMenuProps = {
  item?: MenuItemType
  onConfirm?: (event: GestureResponderEvent) => void
  onCancel?: (event: GestureResponderEvent) => void
}

const CustomizationMenu: FC<CustomizationMenuProps> = ({
  item,
  onConfirm = () => {},
  onCancel = () => {},
}) => {
  const options = item?.addOns ?? []
  const customizationOptions = options.map((option) => (
    <MenuItem key={option.name} {...option} />

  ))

  return (
    <View style={{ display: item ? "flex" : "none" }}>
      <Modal animationType="fade" transparent={true} visible={!!item}>
        <View style={[styles.container, styles.centeredView, styles.shadow]}>
          <View>
            {item && options.length > 0 ? (
              <>
                <Text style={styles.itemNameText}>{item.name} Options</Text>
                <View style={styles.optionsRow}>{customizationOptions}</View>
              </>
            ) : (
              // TODO: style as an alert
              <Text style={styles.itemNameText}>No menu item selected.</Text>
            )}
          </View>
          <View style={styles.buttons}>
            <Button
              text="OK"
              action={onConfirm}
              buttonStyle={[styles.button, { backgroundColor: "white"}]}
              textStyle={styles.buttonText}
            />
            <Button
              text="Cancel"
              action={onCancel}
              buttonStyle={[styles.button, { backgroundColor: "white" }]}
              textStyle={styles.buttonText}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default CustomizationMenu

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderRadius: 8,
    borderWidth: 2,
    paddingVertical: 12,
    width: 240,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
  },
  buttons: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginVertical: 24,
    width: 496,
  },
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
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 64,
  },
})
