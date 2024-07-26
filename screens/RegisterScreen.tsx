import { View, StyleSheet } from "react-native"

import TitleBar from "@components/TitleBar"
import MenuPage from "@components/MenuPage"
import OrderSummary from "@components/OrderSummary"

function RegisterScreen() {
  return (
    <View style={styles.register}>
      <TitleBar />
      <View style={styles.menuAndSummary}>
        <View style={styles.menu}>
          <MenuPage />
        </View>
        <View style={styles.orderSummary}>
          <OrderSummary />
        </View>
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  register: {
    flex: 1,
  },
  menuAndSummary: {
    flex: 1,
    flexDirection: "row",
  },
  menu: {
    flex: 2,
  },
  orderSummary: {
    flex: 1,
  },
})
