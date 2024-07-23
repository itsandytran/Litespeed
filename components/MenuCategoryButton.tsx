import { View, Text, StyleSheet } from "react-native"
import Colors from "../constants/colors"

type MenuCategoryButtonProps = {
  sectionName: string
}

function MenuCategoryButton(props: MenuCategoryButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.menuCategoryText}>{props.sectionName}</Text>
    </View>
  )
}

export default MenuCategoryButton

const styles = StyleSheet.create({
  buttonContainer: {
    height: 120,
    width: 120,
    borderRadius: 7,
    padding: 10,
    borderWidth: 2,
    margin: 8,
    backgroundColor: "white",
    shadowColor: Colors.gray5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  menuCategoryText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
})
