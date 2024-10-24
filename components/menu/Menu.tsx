import { useState } from "react"
import { View } from "react-native"
import DraggableGrid from "react-native-draggable-grid"

import { MenuItemType } from "@lib/sample-data"
import MenuItem from "@components/menu/MenuItem"
import ItemCustomization from "@components/ItemCustomization"

/**
 * Props for the Menu component.
 * -  `menuItemList`: Array of menu items to display in the menu
 */
export interface MenuProps {
  menuItemList: MenuItemType[]
}

/**
 * State for the AddOns modal.
 * - `item `: The menu item selected for customization (if any)
 */
interface AddOnsModalState {
  item?: MenuItemType
}

/**
 * The Menu component displays a "drag and drop" grid containing menu items.
 * Each item can be customized if it has add-ons. 
 * 
 * @param props.MenuItemList - An array of menu items to be displayed in the grid.
 * @returns A draggable grid of menu items, with customization options for items that have add-ons.
 */
const Menu = (props: MenuProps) => {
  // State for tracking the selected item in the AddOns modal.
  const [addOnsModal, setAddOnsModal] = useState({} as AddOnsModalState)

  // State for the menu items, making each item draggable by assigning a unique key to each.
  const [menuItems, setMenuItems] = useState(
    props.menuItemList.map((item, index) => ({ ...item, key: index.toString() }))
  )

  /**
   * Renders a single menu item in the grid.
   * If the item has add-ons, it opens the AddOnsModal on press. 
   * If no add-ons are available, this item is directly added to the order (TODO)
   * 
   * @param item - The menu item to be rendered
   * @returns A MenuItem component wrapped inside a View.
   */
  const renderMenuItem = (item: MenuItemType) => {
    return (
      <View>
        <MenuItem
          name={item.name}
          price={item.price}
          color={item.color}
          addOns={item.addOns}
          onPress={() => {
            // Check if the item has add-ons, and open AddOnsModal if it does
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
      {/* Modal for customizing the seleted item with add-ons */ }
      <ItemCustomization
        item={addOnsModal.item}
        onConfirm={() => {
          // TODO: add item to order
        }}
        onCancel={() => {
          setAddOnsModal({})
        }}
      />

      {/* Draggable grid of menu items */}
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
