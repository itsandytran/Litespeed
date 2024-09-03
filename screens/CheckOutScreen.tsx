import CheckOutButton from "@components/order/CheckOutButton"
import TitleBar from "@components/TitleBar"
import Colors from "@constants/colors"
import TextStyles from "@constants/textStyles"
import { StyleSheet, Text, View } from "react-native"

function CheckOutScreen() {
  return (
    <View style={styles.screenBackground}>
      <TitleBar />
      <View style={styles.calculator}>
        <Text style={TextStyles.header}>Accept cash</Text>
        <Text style={TextStyles.subheader}>Amount received</Text>
        <View style={styles.checkOutButtonsRow}>
          <CheckOutButton buttonName="66.83" />
          <CheckOutButton buttonName="67" />
          <CheckOutButton buttonName="70" />
          <CheckOutButton buttonName="80" />
        </View>
      </View>
    </View>
  )
}

export default CheckOutScreen

const styles = StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: Colors.backgroundGray,
  },
  calculator: {
    padding: 24,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 36,
  },
  regularText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  checkOutButtonsRow: {
    flexDirection: "row",
  },
})
