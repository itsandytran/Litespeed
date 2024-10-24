import { FC, useState } from "react"
import { View, ScrollView, StyleSheet } from "react-native"

import {MenuItemType} from "@lib/sample-data"
import ItemCustomization from "../ItemCustomization"
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
        name={item.name}
        price={item.price}
        color={item.color}
        addOns={item.addOns}
        onPress={() => {
          if ((item.addOns ?? []).length > 0) {
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
      <ItemCustomization
        item={customizationMenu.item}
        onConfirm={() => {
          // TODO: add item to order
        }}
        onCancel={() => {
          setCustomizationMenu({})
        }}
      />
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
