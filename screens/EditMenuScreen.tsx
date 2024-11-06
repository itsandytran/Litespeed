import { FC } from "react"
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native"
import { sampleMenuItems } from "@lib/sample-data"
import Menu from "@components/menu/Menu"
import Colors from "@constants/colors"
import TitleBar from "@components/TitleBar"
import textStyles from "@constants/textStyles"
import SwipeableListItem from "@components/common/SwipeableListItem"

export type EditMenuProps = {
  greeting: string
}

/**
 * The EditMenuScreen component displays the screen for editing the menu.
 * It includes a title bar, an edit menu panel, and a menu grid.
 * TODO: Decide on parameters for the component.
 * @param param0
 * @returns A EditMenuScreen component
 */
const EditMenuScreen: FC<EditMenuProps> = ({ greeting }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingViewContainter}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.backgroundContainer}>
          <TitleBar />
          <View style={styles.editPanel_Menu_Container}>
            {/* Edit Menu Panel */}
            <View style={styles.editPanelContainer}>
              {/* Edit Menu Header */}
              <View style={styles.editPanelHeader}>
                <Text style={textStyles.header}>Edit Menu</Text>
              </View>

              {/* Edit Menu Item Metadata (i.e., name, price, color) */}
              <MenuItemMetadata data="Name" placeholder="Hamburger" />
              <MenuItemMetadata data="Price" placeholder="10.00" />
              <MenuItemMetadata data="Color" placeholder="FF123F9" />

              <View style={styles.addOnsContainer}>
                <SwipeableListItem itemName="Lettuce" itemPrice={0.00} />
                <SwipeableListItem itemName="Onions" itemPrice={0.00} />
                <SwipeableListItem itemName="Tomatoes" itemPrice={0.00} />
                <SwipeableListItem itemName="Relish" itemPrice={0.00} />
                <SwipeableListItem itemName="Extra Cheese" itemPrice={2.00} />
                <SwipeableListItem itemName="Extra Bacon" itemPrice={1.50} />
                <SwipeableListItem itemName="Ketchup" itemPrice={0.00} />
                <SwipeableListItem itemName="Mustard" itemPrice={0.00} />
              </View>
            </View>

            {/* Menu Grid */}
            <View style={styles.menuContainer}>
              <View style={{ paddingVertical: 18 }}>
                <Text style={textStyles.header}>Fries and Burgers</Text>
              </View>
              <View style={{ flex: 1, alignContent: "center" }}>
                <Menu menuItemList={sampleMenuItems} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

type MenuItemMetadataProps = {
  data: string
  placeholder: string
}
const MenuItemMetadata = (props: MenuItemMetadataProps) => {
  return (
    <View style={styles.menuItemMetadataContainer}>
      <View style={{ width: "20%" }}>
        <Text style={textStyles.bold}>{props.data}</Text>
      </View>
      <View style={{ width: "80%" }}>
        <TextInput style={textStyles.regular} placeholder={props.placeholder} />
      </View>
    </View>
  )
}

export default EditMenuScreen

const styles = StyleSheet.create({
  keyboardAvoidingViewContainter: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  backgroundContainer: {
    backgroundColor: Colors.background_gray,
    flex: 1,
  },
  editPanel_Menu_Container: {
    flexDirection: "row",
    flex: 1,
  },
  editPanelHeader: {
    paddingVertical: 32,
  },
  editPanelContainer: {
    flex: 0.38,
    paddingHorizontal: 28,
  },
  menuContainer: {
    backgroundColor: Colors.medium_gray,
    flex: 0.62,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    margin: 18,
    paddingHorizontal: 16,
  },
  menuItemMetadataContainer: {
    flexDirection: "row",
    paddingVertical: 6,
  },
  addOnsContainer: {
    paddingTop: 16,
  }
})
