import { FC, useState } from "react"
import { View, ScrollView, StyleSheet } from "react-native"

import { MenuItemType, sampleMenuCategories } from "@lib/sample-data"
import CustomizationMenu from "../CustomizationMenu"
import MenuCategories from "./MenuCategories"
import MenuItem from "./MenuItem"

type MenuProps = {
  items?: MenuItemType[]
}

type CustomizationMenuState = {
  item?: MenuItemType
}

const Menu: FC<MenuProps> = ({ items = [] }) => {
  const [customizationMenu, setCustomizationMenu] = useState(
    {} as CustomizationMenuState
  )

  const menuItems = items.map((item) => {
    return (
      <MenuItem
        key={item.name}
        {...item}
        onPress={() => {
          if ((item.customizatioinOptions ?? []).length > 0) {
            setCustomizationMenu({ item })
          } else {
            // TODO: directly add the item to the order
          }
        }}
      />
    )
  })

  return (
    <View style={styles.background}>
      <CustomizationMenu
        item={customizationMenu.item}
        onConfirm={() => {
          // TODO: add item to order
        }}
        onCancel={() => {
          setCustomizationMenu({})
        }}
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
