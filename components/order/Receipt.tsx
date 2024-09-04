import { StyleSheet, Text, View } from "react-native"
import TextStyles from "@constants/textStyles"

function Receipt() {
  return (
    <View style={styles.background}>
      <View style={styles.orderNo}>
        <Text style={TextStyles.subheader}>Order no. 134</Text>
      </View>
      <ReceiptItem quantity="1" item="Ham Sandwich" price="8.00" />
      <ReceiptItem quantity="2" item="Tuna Sandwich" price="16.00" />
      <ReceiptItem quantity="1" item="Bacon Cheese Burger" price="22.00" />
      <ReceiptItem quantity="1" item="Golden Egg Salad Sandwich" price="500.00" />
      <ReceiptTax description="Subtotal" amount="546.00"/>
      <ReceiptTax description="HST" amount="70.98"/>
      <ReceiptTax description="Total" amount="616.98"/>
      <ReceiptTax description="Rounding" amount="0.02"/>
      <ReceiptTax description="" amount="617.00"/>
      <ReceiptTax description="Cash" amount="620.00"/>
      <ReceiptTax description="Change due" amount="3.00"/>
    </View>
  )
}

export default Receipt

type ReceiptItemProps = {
  quantity: string
  item: string
  price: string
}
const ReceiptItem = (props: ReceiptItemProps) => {
  return (
    <View style={styles.receiptItem}>
      <View style={styles.quantity}>
        <Text style={TextStyles.regular}>{props.quantity}</Text>
      </View>
      <View style={styles.item}>
        <Text style={TextStyles.regular}>{props.item}</Text>
      </View>
      <View style={styles.price}>
        <Text style={TextStyles.regular}>{props.price}</Text>
      </View>
    </View>
  )
}

type ReceiptTaxProps = {
  description: string
  amount: string
}
const ReceiptTax = (props: ReceiptTaxProps) => {
  return (
    <View style={styles.receiptTax}>
      <View style={styles.tax}>
        <Text style={TextStyles.regular}>{props.description}</Text>
      </View>
      <View style={styles.price}>
        <Text style={TextStyles.regular}>{props.amount}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    paddingHorizontal: 24,
    paddingTop: 24,
    width: 500,
    height: "88%",
  },
  orderNo: {
    paddingBottom: 12,
  },
  receiptItem: {
    flexDirection: "row",
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomColor: "#D2D2D2",
    borderBottomWidth: 0.5,
  },
  quantity: {
    width: "10%",
  },
  item: {
    width: "70%",
  },
  price: {
    width: "20%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  receiptTax: {
    flexDirection: "row"
  },
  tax: {
    width: "80%",
    paddingLeft: 200,
  }
})
