import { View, StyleSheet } from "react-native"

import MenuPage from "@components/MenuPage"
import OrderSummary from "@components/OrderSummary"

function RegisterScreen() {
  return (
    <View style={styles.register}>
        <MenuPage />
        <OrderSummary />
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  register: {
    paddingLeft: 80,
    paddingTop: 80,
    flexDirection: "row",
    backgroundColor: "black",
  },
})
