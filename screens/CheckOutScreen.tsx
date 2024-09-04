import CheckOutButton from "@components/order/CheckOutButton"
import Receipt from "@components/order/Receipt"
import TitleBar from "@components/TitleBar"
import Colors from "@constants/colors"
import TextStyles from "@constants/textStyles"
import { StyleSheet, Text, TextInput, View } from "react-native"

function CheckOutScreen() {
  return (
    <View style={styles.screenBackground}>
      <TitleBar />
      <View style={styles.calculatorAndReceipt}>
        <View style={styles.calculator}>
          <Text style={[styles.header, TextStyles.header]}>Accept cash</Text>
          <Text style={[styles.subheader, TextStyles.bold]}>
            Amount received
          </Text>
          <View style={styles.checkOutButtonsRow}>
            <CheckOutButton buttonName="617.00" />
            <CheckOutButton buttonName="618" />
            <CheckOutButton buttonName="620" />
            <CheckOutButton buttonName="650" />
          </View>
          <TextInput style={styles.otherAmount} keyboardType="numeric" placeholder="Other amount"/>
        </View>
        <Receipt />
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
    width: 640,
    paddingHorizontal: 16,
  },
  header: {
    paddingTop: 122,
  },
  subheader: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  calculatorAndReceipt: {
    flexDirection: "row",
    padding: 8,
    height: "100%"
  },
  checkOutButtonsRow: {
    flexDirection: "row",
    paddingBottom: 16,
  },
  otherAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    height: 64,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
  },
})
