import { FC, useState } from "react"
import { View, ScrollView, StyleSheet } from "react-native"

import { sampleMenuItems } from "@lib/sample-data"
import ItemCustomization from "./ItemCustomization"
import MenuItem from "./MenuItem"

const MenuPage: FC = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const menuItems = sampleMenuItems.map(({ name, price, color }) => {
    return <MenuItem key={name} name={name} price={price} color={color} />
  })

  return (
    <View style={styles.background}>
      <ItemCustomization
        itemName="Cheese Dog"
        itemOptions={["ketchup", "mustard", "mayo"]}
        visible={modalVisible}
      />
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.menuItemsContainer}>{menuItems}</View>
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
