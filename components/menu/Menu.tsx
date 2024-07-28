import { FC, useState } from "react"
import { View, ScrollView, StyleSheet } from "react-native"

import {
  sampleCustomizationOptions,
  sampleMenuCategories,
  sampleMenuItems,
} from "@lib/sample-data"
import ItemCustomization from "../ItemCustomization"
import MenuItem from "./MenuItem"
import MenuCategories from "./MenuCategories"

const MenuPage: FC = () => {
  const [modalVisible, setModalVisible] = useState(true)

  const menuItems = sampleMenuItems.map(({ name, price, color }) => {
    return <MenuItem key={name} name={name} price={price} color={color} />
  })

  return (
    <View style={styles.background}>
      <ItemCustomization
        itemName="Cheese Dog"
        options={sampleCustomizationOptions}
        visible={modalVisible}
      />
      <View>
        <MenuCategories categories={sampleMenuCategories} />
      </View>
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.menuItemsContainer}>{menuItems}</View>
      </ScrollView>
    </View>
  )
}

export default MenuPage

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "row",
    //backgroundColor: "blue",
  },
  menuItemsContainer: {
    flexDirection: "row",
    marginHorizontal: 8,
    marginTop: 8,
    flexWrap: "wrap",
    //flex: 1,
  },
})
