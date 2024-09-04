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
      <View style={styles.calculatorAndReceiptContainer}>
        <View style={styles.calculatorContainer}>
          <Text style={[styles.acceptCashHeader, TextStyles.header]}>
            Accept cash
          </Text>
          <Text style={[styles.amountReceivedHeader, TextStyles.bold]}>
            Amount received
          </Text>
          <View style={styles.cashButtonsRow}>
            <CheckOutButton buttonName="617.00" />
            <CheckOutButton buttonName="618" />
            <CheckOutButton buttonName="620" />
            <CheckOutButton buttonName="650" />
          </View>
          <TextInput
            style={styles.otherAmountTextInput}
            keyboardType="numeric"
            placeholder="Other amount"
          />
          <View style={styles.changeDueRow}>
            <Text style={TextStyles.header}>Change due:  </Text>
            <View style={styles.changeDueAmountContainer}>
              <Text style={TextStyles.header}>3.00</Text>
            </View>
          </View>
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
  calculatorAndReceiptContainer: {
    flexDirection: "row",
    padding: 8,
    height: "100%",
  },
  calculatorContainer: {
    width: 640,
    paddingHorizontal: 16,
  },
  acceptCashHeader: {
    paddingTop: 122,
  },
  amountReceivedHeader: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  cashButtonsRow: {
    flexDirection: "row",
    paddingBottom: 16,
  },
  otherAmountTextInput: {
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
  changeDueRow: {
    marginTop: 48,
    flexDirection: "row",
    alignItems: "center",
  },
  changeDueAmountContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    height: 64,
    width: 256,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 12,
  },
})
