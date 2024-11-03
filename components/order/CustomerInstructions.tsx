import { useState } from "react"
import { Image, View, TextInput, StyleSheet } from "react-native"
import textStyles from "@constants/textStyles"

function CustomerInstructions() {
  const [instructionsText, onChangeText] = useState("Add note")

  return (
    <View style={styles.background}>
      <Image
        source={require("@assets/icons/Interface-Essential-Edit-Fill--Streamline-Pixel.png")}
        style={styles.notepad_icon}
      />
      <TextInput
        style={[textStyles.italic, {marginHorizontal: 12}]}
        placeholder="Customer Instructions"
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
  notepad_icon: {
    height: 20,
    width: 20,
    marginTop: 8,
  },
})
