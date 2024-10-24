import { useState } from "react"
import { View } from "react-native"
import DraggableGrid from "react-native-draggable-grid"

import { MenuItemType } from "@lib/sample-data"
import MenuItem from "@components/menu/MenuItem"
import CustomizationMenu from "../CustomizationMenu"

/**
 * Props for the Menu component.
 * -  `menuItemList`: Array of menu items to display in the menu
 */
export interface MenuProps {
  menuItemList: MenuItemType[]
  onAddItem?: (item: MenuItemType) => void
}

/**
 * The Menu component displays a "drag and drop" grid containing menu items.
 * Each item can be customized if it has add-ons. 
 * 
 * @param props.MenuItemList - An array of menu items to be displayed in the grid.
 * @returns A draggable grid of menu items, with customization options for items that have add-ons.
 */
const Menu = (props: MenuProps) => {
  // Default value of {} for onAddItem prop
  const onAddItem = props.onAddItem ?? (() => {})

  // State for tracking the selected item in the AddOns modal.
  const [selectedItem, setSelectedItem] = useState(
    null as MenuItemType | null
  )

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
          key={item.name}
          {...item}
          onPress={() => {
            // Check if the item has add-ons, and open AddOnsModal if it does
            if ((item.addOns ?? []).length > 0) {
              setSelectedItem(item)
            } else {
              // Otherwise, add item to order summary
              onAddItem(item)
            }
          }}
        />
      </View>
    )
  }

  /**
   * Renders a pop-up menu containing add-ons for the selected item.
   * On confirm, the selected item is cleared and calls onAddItem callback.
   * On cancel, the selected item is cleared and nothing is called.
   */
  const addOnsMenu = (selectedItem) ? (
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

  return (
    <View>
      {/* Modal for customizing the seleted item with add-ons */ }
      {addOnsMenu}
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
