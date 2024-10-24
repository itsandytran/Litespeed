import { ScrollView, StyleSheet, Text, View } from "react-native"
import TitleBar from "@components/TitleBar"
import Menu from "../components/menu/Menu"

import { sampleMenuItems, categories } from "@lib/sample-data"
import Colors from "@constants/colors"
import MenuCategory from "@components/menu/MenuCategory"
import OrderSummary from "@components/order/OrderSummary"
import CheckoutOptions from "@components/order/CheckoutOptions"

export default function RegisterScreen() {
  return (
    <View style={styles.screenBackground}>
      <TitleBar />
      <View style={styles.menuAndOrderSummarycontainer}>
        <View style={styles.menuContainer}>
          <View style={styles.menuCategoryContainer}>
            <MenuCategory categories={categories} />
          </View>
          <ScrollView alwaysBounceVertical={false}>
            <Menu menuItemList={sampleMenuItems} />
          </ScrollView>
        </View>
        <View style={styles.orderSummaryContainer}>
          <OrderSummary />
          <CheckoutOptions total={99.18} />
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
