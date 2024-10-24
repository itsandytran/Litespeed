import textStyles from "@constants/textStyles"
import { FC } from "react"
import { Text, View } from "react-native"

type MenuCategoryProps = {
  categories: string[]
}

const MenuCategory: FC<MenuCategoryProps> = ({ categories }) => {
  // TODO: Keep track of the current category to be displayed. 
  return (
    <View>
      <Text style={textStyles.header}>{categories[0]}</Text>
    </View>
  )
}

export default MenuCategory
