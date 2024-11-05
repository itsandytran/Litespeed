import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import { sampleMenuItems } from "@lib/sample-data"
import Menu from "@components/menu/Menu"
import Colors from "@constants/colors"
import TitleBar from "@components/TitleBar"
import textStyles from "@constants/textStyles"

export type EditMenuProps = {
  greeting: string
}

const EditMenuScreen: FC<EditMenuProps> = (greeting) => {
  return (
    <View style={styles.backgroundContainer}>
      <TitleBar />
      <View style={styles.editPanel_Menu_Container}>
        {/* Edit Menu Panel */}
        <View style={styles.editPanelContainer}>
          <Text style={textStyles.header}>Editing Panel</Text>
        </View>

        {/* Menu Grid */}
        <View style={styles.menuContainer}>
          <Text style={textStyles.regular}>Menu</Text>
          <Text style={textStyles.italic}> Hello world! </Text>
        </View>
      </View>
    </View>
  )
}

export default EditMenuScreen

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: Colors.background_gray,
    flex: 1,
  },
  editPanel_Menu_Container: {
    flexDirection: "row",
    flex: 1,
  },
  editPanelContainer: {
    flex: 0.4,
    //paddingHorizontal: 16,
    //marginHorizontal: 16,
  },
  menuContainer: {
    backgroundColor: Colors.medium_gray,
    flex: 0.6,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    margin: 18,
    padding:12,
  }
})
