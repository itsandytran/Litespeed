import { FC } from "react"
import { View, StyleSheet } from "react-native"

import { sampleMenuItems } from "@lib/sample-data"
import TitleBar from "@components/TitleBar"
import Menu from "@components/menu/Menu"
import OrderSummary from "@components/order/OrderSummary"

const RegisterScreen: FC = () => (
  <View style={styles.register}>
    <TitleBar />
    <View style={styles.menuAndSummary}>
      <View style={styles.menu}>
        <Menu items={sampleMenuItems} />
      </View>
      <View style={styles.orderSummary}>
        <OrderSummary />
      </View>
    </View>
  </View>
)

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
