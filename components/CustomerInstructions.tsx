import { useState } from "react"
import { Image, View, TextInput, StyleSheet } from "react-native"
import Colors from "../constants/colors"

function CustomerInstructions() {
  const [instructionsText, onChangeText] = useState("Add note")

  return (
    <View style={styles.background}>
      <Image
        source={require("@assets/icons/Interface-Essential-Edit-Fill--Streamline-Pixel.png")}
        style={styles.icon}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Add note"
        onChangeText={onChangeText}
        multiline={true}
      />
    </View>
  )
}

export default CustomerInstructions

const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
    paddingBottom: 12,
  },
  textInput: {
    marginHorizontal: 12,
    fontSize: 20,
    color: Colors.gray3,
  },
  icon: {
    tintColor: Colors.gray3,
    height: 24,
    width: 24,
    marginLeft: 8,
    marginTop: 8,
  },
})
