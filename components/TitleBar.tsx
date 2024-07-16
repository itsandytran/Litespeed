import { Text, View, StyleSheet, Image } from "react-native"
import Colors from "../constants/colors"

function TitleBar() {
  return (
    <View style={styles.background}>
      <View style={styles.logo}>
        <Image
          source={require("@assets/icons/Money-Payments-Self-Payment--Streamline-Pixel.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>litespeed.</Text>
      </View>
    </View>
  )
}

export default TitleBar

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.gray4,
    width: "100%",
    paddingVertical: 20,
  },
  logo: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logoImage: {
    tintColor: "white",
    height: 36,
    width: 36,
    marginRight: 8,
  },
  logoText: {
    fontFamily: "Fraunces",
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
})
