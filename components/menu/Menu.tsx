import { FC, useState } from "react"
import { MenuItemType } from "@lib/sample-data"
import { StyleSheet, View } from "react-native"
import DraggableGrid from "react-native-draggable-grid"
import MenuItem from "./MenuItem"
import ItemCustomization from "@components/ItemCustomization"

type MenuProps = {
  menuItemList: MenuItemType[]
}

type AddOnsModalState = {
  item?: MenuItemType
}

const Menu: FC<MenuProps> = ({ menuItemList }) => {
  const [addOnsModal, setAddOnsModal] = useState({} as AddOnsModalState)

  // List of menu items to be rendered
  const [menuItems, setMenuItems] = useState(
    menuItemList.map((item, index) => ({ ...item, key: index.toString() }))
  )

  const renderMenuItem = (item: MenuItemType) => {
    return (
      <View>
        <MenuItem
          name={item.name}
          price={item.price}
          color={item.color}
          addOns={item.addOns}
          onPress={() => {
            if ((item.addOns ?? []).length > 0) {
              setAddOnsModal({ item })
            } else {
              // TODO: Add item to order
            }
          }}
        />
      </View>
    )
  }

  return (
    <View>
      <ItemCustomization
        item={addOnsModal.item}
        onConfirm={() => {
          // TODO: add item to order
        }}
        onCancel={() => {
          setAddOnsModal({})
        }}
      />
      <DraggableGrid
        numColumns={5}
        renderItem={renderMenuItem}
        data={menuItems}
        onDragRelease={(data) => {
          setMenuItems(data)
        }}
      />
    </View>
  )
}

export default Menu
