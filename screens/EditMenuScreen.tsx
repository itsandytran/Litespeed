import { FC } from "react"
import {
  KeyboardAvoidingView,
  ScrollView, // Add ScrollView to allow for scrolling when keyboard is up
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native"
import { sampleMenuItems } from "@lib/sample-data"
import Menu from "@components/menu/Menu"
import Colors from "@constants/colors"
import TitleBar from "@components/TitleBar"
import textStyles from "@constants/textStyles"

export type EditMenuProps = {
  greeting: string
}

const EditMenuScreen: FC<EditMenuProps> = ({ greeting }) => {
  return (
    // Use KeyboardAvoidingView with behavior depending on platform
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container} // Make sure the container takes full height
    >
      {/* ScrollView allows for smooth scrolling when keyboard is visible */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.backgroundContainer}>
          <TitleBar />
          <View style={styles.editPanel_Menu_Container}>
            {/* Edit Menu Panel */}
            <View style={styles.editPanelContainer}>
              <Text style={textStyles.header}>Edit Menu</Text>
              <TextInput style={styles.input} placeholder="Enter Item Name" />
            </View>

            {/* Menu Grid */}
            <View style={styles.menuContainer}>
              <View style={{paddingVertical: 18}}>
                <Text style={textStyles.header}>Fries and Burgers</Text>
              </View>

              <Menu menuItemList={sampleMenuItems} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default EditMenuScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the KeyboardAvoidingView takes full height
  },
  backgroundContainer: {
    backgroundColor: Colors.background_gray,
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1, // Allow ScrollView to grow and take full height
  },
  editPanel_Menu_Container: {
    flexDirection: "row",
    flex: 1,
  },
  editPanelContainer: {
    flex: 0.42,
    paddingVertical: 32,
    marginLeft: 18,
  },
  menuContainer: {
    backgroundColor: Colors.medium_gray,
    flex: 0.58,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    margin: 18,
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 8,
    color: "blue", // Your text color for the input field
  },
})
