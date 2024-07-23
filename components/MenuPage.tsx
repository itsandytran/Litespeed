import { View, ScrollView, StyleSheet } from "react-native"
import { useState } from "react"

import MenuItem from "./MenuItem"
import Colors from "../constants/colors"
import ItemCustomization from "./ItemCustomization"

let menu: {
  itemName: string
  itemPrice: string
  buttonColor: string
}[] = [
  { itemName: "Fries", itemPrice: "5.00", buttonColor: Colors.orange1 },
  { itemName: "Poutine", itemPrice: "7.00", buttonColor: Colors.orange1 },
  { itemName: "Gravy", itemPrice: "1.5", buttonColor: Colors.orange1 },
  { itemName: "Ham Burger", itemPrice: "7.50", buttonColor: Colors.orange1 },
  { itemName: "Cheese Burger", itemPrice: "8.25", buttonColor: Colors.orange1 },
  {
    itemName: "Bacon Cheese Burger",
    itemPrice: "10.75",
    buttonColor: Colors.yellow1,
  },
  {
    itemName: "Hotdog",
    itemPrice: "3.00",
    buttonColor: Colors.yellow1,
  },
  { itemName: "Cheese Dog", itemPrice: "3.75", buttonColor: Colors.yellow1 },
  {
    itemName: "Bacon Cheese Dog",
    itemPrice: "6.25",
    buttonColor: Colors.yellow1,
  },
  {
    itemName: "Italian Sausage",
    itemPrice: "7.00",
    buttonColor: Colors.yellow1,
  },
  { itemName: "Polish Sausage", itemPrice: "7.00", buttonColor: Colors.green1 },
  {
    itemName: "Chicken Fingers",
    itemPrice: "12.00",
    buttonColor: Colors.green1,
  },
  {
    itemName: "Popcorn Chicken",
    itemPrice: "16.00",
    buttonColor: Colors.green1,
  },
  { itemName: "Pogo", itemPrice: "3.00", buttonColor: Colors.green1 },
  { itemName: "Onion Rings", itemPrice: "7.00", buttonColor: Colors.green1 },
  { itemName: "Chicken Burger", itemPrice: "7.00", buttonColor: Colors.green2 },
  {
    itemName: "Mozzarella Sticks",
    itemPrice: "8.00",
    buttonColor: Colors.green2,
  },
  {
    itemName: "Deep Fried Cheese Curds",
    itemPrice: "10.00",
    buttonColor: Colors.green2,
  },
  { itemName: "Pop Drink", itemPrice: "1.75", buttonColor: Colors.green2 },
]

function MenuPage() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.background}>
      {/* <ItemCustomization itemName="Cheese Dog" itemOptions={["ketchup", "mustard", "mayo"]} visible={true} /> */}
      <ScrollView alwaysBounceVertical={false}>
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
    width: 622,
  },
  menuItemsContainer: {
    flexDirection: "row",
    marginLeft: 1,
    marginTop: 1,
    flexWrap: "wrap",
  },
})
