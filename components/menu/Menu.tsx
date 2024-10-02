import { FC, useState } from "react"
import { View, ScrollView, StyleSheet } from "react-native"

import { MenuItemType, sampleMenuCategories } from "@lib/sample-data"
import CustomizationMenu from "../CustomizationMenu"
import MenuCategories from "./MenuCategories"
import MenuItem from "./MenuItem"

type MenuProps = {
  items?: MenuItemType[]
  onAddItem?: (item: MenuItemType) => void
}

const Menu: FC<MenuProps> = ({ items = [], onAddItem = () => {} }) => {
  const [selectedItem, setSelectedItem] = useState(
    null as MenuItemType | null
  )

  const customizationMenu = (selectedItem) ? (
    <CustomizationMenu
      item={selectedItem}
      onConfirm={() => {
        setSelectedItem(null)
        onAddItem(selectedItem)
      }}
      onCancel={() => {
        setSelectedItem(null)
      }}
    />
  ) : null

  const menuItems = items.map((item) => {
    return (
      <MenuItem
        key={item.name}
        {...item}
        onPress={() => {
          if ((item.customizatioinOptions ?? []).length > 0) {
            setSelectedItem(item)
          } else {
            onAddItem(item)
          }
        }}
      />
    )
  })

  return (
    <View style={styles.background}>
      {customizationMenu}
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
