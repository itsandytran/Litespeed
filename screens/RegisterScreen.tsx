import { View, StyleSheet } from "react-native"

import TitleBar from "@components/TitleBar"
import MenuPage from "@components/MenuPage"
import OrderSummary from "@components/OrderSummary"

function RegisterScreen() {
  return (
    <View>
      <TitleBar />
      <View style={styles.register}>
        <MenuPage />
        <OrderSummary />
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  register: {
    flexDirection: "row",
    backgroundColor: "white",
    height: "100%",
  },
})
