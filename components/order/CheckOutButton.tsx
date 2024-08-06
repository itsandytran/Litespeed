import { View, Text, StyleSheet } from "react-native"
import Colors from "@constants/colors"

type CheckOutButtonProps = {
  buttonName: string
}

function CheckOutButton(props: CheckOutButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{props.buttonName}</Text>
    </View>
  )
}

export default CheckOutButton

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: "white",
    height: 64,
    margin: 2,
    borderRadius: 7,
    justifyContent: "center",
    borderWidth: 2,
    shadowColor: Colors.gray5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
})
