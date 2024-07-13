import { View, Text, StyleSheet } from "react-native"

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
    backgroundColor: "black",
    height: 75,
    margin: 2,
    borderRadius: 7,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
})
