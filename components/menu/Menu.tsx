import { FC, useState } from "react"
import { View, ScrollView, StyleSheet } from "react-native"

import {
  MenuItemType,
  sampleCustomizationOptions,
  sampleMenuCategories,
} from "@lib/sample-data"
import ItemCustomization from "../ItemCustomization"
import MenuItem from "./MenuItem"
import MenuCategories from "./MenuCategories"

type MenuProps = {
  items?: MenuItemType[]
}

const Menu: FC<MenuProps> = ({ items = [] }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const menuItems = items.map(({ name, price, color }) => {
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

export default Menu

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
