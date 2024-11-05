import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { sampleMenuItems } from "@lib/sample-data";
import Menu from "@components/menu/Menu";
import Colors from "@constants/colors";
import TitleBar from "@components/TitleBar";
import textStyles from "@constants/textStyles";

export type EditMenuProps = {
  greeting: string
};

const EditMenuScreen: FC<EditMenuProps> = (greeting) => {
  return (
    <View style={styles.backgroundContainer}>
      <TitleBar />
      <View>
        <Text style={textStyles.header}>Editing Panel</Text>
      </View>

      {/* Menu Grid  */}
      <View>
        <Text style={textStyles.regular}>Menu</Text>
        <Text style={textStyles.italic}> Hello world! </Text>
      </View>
    </View>
  );
};

export default EditMenuScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: Colors.backgroundGray,
    flex: 1,
  },
});
