import { FC, useState } from "react"
import { View, StyleSheet } from "react-native"

import { sampleMenuItems, sampleOrderItems } from "@lib/sample-data"
import TitleBar from "@components/TitleBar"
import Menu from "@components/menu/Menu"
import OrderSummary from "@components/order/OrderSummary"

const RegisterScreen: FC = () => {
  const [menuItems, setMenuItems] = useState(sampleMenuItems)
  const [orderItems, setOrderItems] = useState(sampleOrderItems)

  return (
    <View style={styles.register}>
      <TitleBar />
      <View style={styles.menuAndSummary}>
        <View style={styles.menu}>
          <Menu items={menuItems} />
        </View>
        <View style={styles.orderSummary}>
          <OrderSummary items={orderItems} />
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
