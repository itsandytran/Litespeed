import { View, ScrollView, StyleSheet } from "react-native"

import MenuItem from "./MenuItem"

let menu: {
  itemName: string
  itemPrice: string
  buttonColor: string
}[] = [
  { itemName: "Ham Sandwich", itemPrice: "16.00", buttonColor: "#6D9496" },
  { itemName: "Tuna Sandwich", itemPrice: "21.00", buttonColor: "#e1b382" },
  { itemName: "Steak Sandwich", itemPrice: "21.00", buttonColor: "#2d545e" },
  { itemName: "Cheese Burger", itemPrice: "16.00", buttonColor: "#12343b" },
  { itemName: "Backon Burger", itemPrice: "16.00", buttonColor: "#6D9496" },
  { itemName: "Veggie Sandwich", itemPrice: "9.00", buttonColor: "#6D9496" },
  {
    itemName: "Cheese Veggie Sandwich",
    itemPrice: "11.00",
    buttonColor: "#6D9496",
  },
  { itemName: "Grilled Cheese", itemPrice: "12.00", buttonColor: "#6D9496" },
  { itemName: "Hotdog", itemPrice: "12.00", buttonColor: "#6D9496" },
  { itemName: "BLT", itemPrice: "16.00", buttonColor: "#6D9496" },
  { itemName: "Grilled Cheese 2", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "Hotdog 2", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "BLT 2", itemPrice: "16.00", buttonColor: "#ffaaab" },
  { itemName: "Grilled Cheese 3", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "Hotdog 3", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "BLT 3", itemPrice: "16.00", buttonColor: "#ffaaab" },
  { itemName: "Grilled Cheese 4", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "Hotdog 4", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "BLT 4", itemPrice: "16.00", buttonColor: "#ffaaab" },
  { itemName: "Grilled Cheese 5", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "Hotdog 5", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "BLT 5", itemPrice: "16.00", buttonColor: "#ffaaab" },
  { itemName: "Grilled Cheese 6", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "Hotdog 6", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "BLT 6", itemPrice: "16.00", buttonColor: "#ffaaab" },
  { itemName: "Grilled Cheese 7", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "Hotdog 7", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "BLT 7", itemPrice: "16.00", buttonColor: "#ffaaab" },
  { itemName: "Grilled Cheese 8", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "Hotdog 8", itemPrice: "12.00", buttonColor: "#ffaaab" },
  { itemName: "BLT 8", itemPrice: "16.00", buttonColor: "#ffaaab" },
]

function MenuPage() {
  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.menuItemsContainer}>
          {menu.map((item) => (
            <View key={item.itemName}>
              <MenuItem
                itemName={item.itemName}
                itemPrice={item.itemPrice}
                buttonColor={item.buttonColor}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default MenuPage

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    width: 622,
    height: "100%",
  },
  menuItemsContainer: {
    flexDirection: "row",
    marginLeft: 1,
    marginTop: 1,
    flexWrap: "wrap",
  },
})
