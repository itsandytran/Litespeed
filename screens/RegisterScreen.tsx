import { View, Text, StyleSheet } from "react-native"

import MenuPage from "../components/MenuPage"

function RegisterScreen() {
  return (
    <View style={styles.register}>
      <Text>Register</Text>
      <MenuPage />
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  register: {
    paddingLeft: 80,
    paddingTop: 80,
  },
})
