import { FC } from "react"
import { StyleSheet, View } from "react-native"

import Button from "@components/common/Button"
import Colors from "@constants/colors"

type MenuCategoriesProps = {
  categories: string[]
}

const MenuCategories: FC<MenuCategoriesProps> = ({ categories }) => (
  <View style={styles.background}>
    {categories.map((category) => (
      <Button
        key={category}
        text={category}
        buttonStyle={styles.button}
        textStyle={styles.categoryText}
      />
    ))}
  </View>
)

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
  button: {
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
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
})
