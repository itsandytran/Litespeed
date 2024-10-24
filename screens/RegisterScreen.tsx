import { ScrollView, StyleSheet, View } from "react-native"

import TitleBar from "@components/TitleBar"
import Menu from "@components/menu/Menu"
import MenuCategory from "@components/menu/MenuCategory"
import OrderSummary from "@components/order/OrderSummary"
import CheckoutOptions from "@components/order/CheckoutOptions"

import Colors from "@constants/colors"
import { sampleMenuItems, categories } from "@lib/sample-data"


/**
 * The RegisterScreen component displays the main screen for registering an order.
 * It includes a title bar, a menu with selectable items, an order summary, and checkout options.
 * 
 * @returns A view containing the title bar, menu, order summary, and checkout options.
 */
export default function RegisterScreen() {
  return (
    <View style={styles.screenBackground}>
      {/* Title bar displayed at the top of the screen */}
      <TitleBar />

      <View style={styles.menuAndOrderSummarycontainer}>
        <View style={styles.menuContainer}>
          {/* Menu categories displayed above the menu items */}
          <View style={styles.menuCategoryContainer}>
            <MenuCategory categories={categories} />
          </View>

          {/* Scrollable view for the menu items */}
          <ScrollView alwaysBounceVertical={false}>
            <Menu menuItemList={sampleMenuItems} />
          </ScrollView>
        </View>

        <View style={styles.orderSummaryContainer}>
          {/* Displays the summary of the current order */}
          <OrderSummary />
          {/* Checkout options for completing the order */}
          <CheckoutOptions total={25.18} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: Colors.backgroundGray,
  },
  menuAndOrderSummarycontainer: {
    flexDirection: "row",
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    marginLeft: 16,
  },
  menuCategoryContainer: {
    paddingTop: 24,
    paddingBottom: 12,
    paddingLeft: 12,
  },
  orderSummaryContainer: {
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
})
