import { View, StyleSheet, Image } from "react-native";

function TitleBar() {
  return (
    <View style={styles.background}>
      <Image
        source={require("@assets/logo/logo.png")}
        style={styles.logoImage}
      />
    </View>
  );
}

export default TitleBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    flexDirection: "row",
    paddingVertical: 4,
    justifyContent: "center",
  },
  logoImage: {
    height: 48,
    width: 180,
  },
});
