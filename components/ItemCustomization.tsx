import { Text, Modal, View, StyleSheet } from "react-native"
import MenuItem from "./MenuItem"
import Colors from "../constants/colors"

type ItemCustomizationProps = {
  itemName: string
  itemOptions: string[]
  visible: boolean
}

function ItemCustomization(props: ItemCustomizationProps) {
  return (
    <View>
      <Modal transparent={true} visible={true}>
        <View style={styles.background}>
          <Text style={styles.itemNameText}>{props.itemName} Options</Text>
          <View style={styles.optionsRow}>
            <MenuItem
              itemName="Salt"
              itemPrice="2.00"
              buttonColor={Colors.gray3}
            />
            <MenuItem
              itemName="Pepper"
              itemPrice="2.00"
              buttonColor={Colors.gray3}
            />
          </View>
        </View>
      </Modal>
    </View>
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
