import { View, StyleSheet } from "react-native"

import TitleBar from "@components/TitleBar"
import MenuPage from "@components/MenuPage"
import OrderSummary from "@components/OrderSummary"

function RegisterScreen() {
  return (
    <View style={styles.register}>
      <TitleBar />
      <View style={styles.menuAndSummary}>
        <MenuPage />
        <OrderSummary />
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
    backgroundColor: "white",
  },
})
