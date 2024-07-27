import { View, Image, StyleSheet } from "react-native"
import Colors from "@constants/colors"
import MenuCategoryButton from "./MenuCategoryButton"

function MenuCategories() {
  return (
    <View style={styles.background}>
      <MenuCategoryButton sectionName="Burgers" />
      <MenuCategoryButton sectionName="Drinks" />
      <MenuCategoryButton sectionName="Desserts" />
      <MenuCategoryButton sectionName="Breakfast" />
    </View>
  )
}

export default MenuCategories

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.gray2,
  },
  icon: {
    height: 64,
    width: 64,
  },
})
