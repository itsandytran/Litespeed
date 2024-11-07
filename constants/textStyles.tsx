import { PixelRatio,StyleSheet } from "react-native"

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

export default StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: getFontSize(36),
  },
  regular: {
    fontSize: getFontSize(20),
  },
  bold: {
    fontWeight: "bold",
    fontSize: getFontSize(20),
  },
  italic: {
    fontStyle: "italic",
    fontSize: getFontSize(20),
  },
  gray: {
    color: "#777777",
    fontSize: getFontSize(20),
  },
  price: {
    fontSize: getFontSize(12),
    textAlign: "right",
  },
})
