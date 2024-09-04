import { StyleSheet, Text, View } from "react-native"
import TextStyles from "@constants/textStyles"

function Receipt() {
  const date = new Date()
  const formattedDate = date.toLocaleString("en-US", {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'});

  return (
    <View style={styles.background}>
      <View style={styles.orderNo}>
        <Text style={TextStyles.bold}>Order no. 134</Text>
        <Text style={TextStyles.gray}>{formattedDate}</Text>
      </View>
      <ReceiptItem quantity="1" item="Ham Sandwich" price="8.00" />
      <ReceiptItem quantity="2" item="Tuna Sandwich" price="16.00" />
      <ReceiptItem
        quantity="1"
        item="Bacon Cheese Burger"
        customization="Lettuce, Onions, Pickles, Ketchup, Mayonnaise, Mustard, Relish"
        price="22.00"
      />
      <ReceiptItem
        quantity="1"
        item="Golden Egg Salad Sandwich"
        price="500.00"
      />
      <ReceiptTax
        description="Subtotal"
        amount="546.00"
        bold={false}
        underlined={false}
      />
      <ReceiptTax
        description="HST"
        amount="70.98"
        bold={false}
        underlined={false}
      />
      <ReceiptTax
        description="Total"
        amount="616.98"
        bold={false}
        underlined={false}
      />
      <ReceiptTax
        description="Rounding"
        amount="0.02"
        bold={false}
        underlined={false}
      />
      <ReceiptTax
        description=""
        amount="617.00"
        bold={true}
        underlined={true}
      />
      <ReceiptTax
        description="Cash"
        amount="620.00"
        bold={false}
        underlined={true}
      />
      <ReceiptTax
        description="Change due"
        amount="3.00"
        bold={true}
        underlined={false}
      />
      <View style={styles.customerNotesRow}>
        <Text style={TextStyles.italic}>
          Note: Customer needs extra cutlery.
        </Text>
      </View>
    </View>
  )
}

export default Receipt

type ReceiptItemProps = {
  quantity: string
  item: string
  price: string
  customization?: string
}
const ReceiptItem = (props: ReceiptItemProps) => {
  // Receipt item without customization options
  let item = (
    <View style={styles.itemColumn}>
      <Text style={TextStyles.regular}>{props.item}</Text>
    </View>
  )

  // Receipt item WITH customization options
  if (props.customization) {
    item = (
      <View style={styles.itemColumn}>
        <Text style={TextStyles.regular}>{props.item}</Text>
        <Text style={TextStyles.italic}>{props.customization}</Text>
      </View>
    )
  }

  return (
    <View style={styles.underlinedRow}>
      <View style={styles.quantityColumn}>
        <Text style={TextStyles.regular}>{props.quantity}</Text>
      </View>
      {item}
      <View style={styles.priceColumn}>
        <Text style={TextStyles.regular}>{props.price}</Text>
      </View>
    </View>
  )
}

type ReceiptTaxProps = {
  description: string
  amount: string
  bold: boolean
  underlined: boolean
}
const ReceiptTax = (props: ReceiptTaxProps) => {
  return (
    <View style={props.underlined ? styles.underlinedRow : styles.row}>
      <View style={styles.taxColumn}>
        <Text style={props.bold ? TextStyles.bold : TextStyles.regular}>
          {props.description}
        </Text>
      </View>
      <View style={styles.priceColumn}>
        <Text style={props.bold ? TextStyles.bold : TextStyles.regular}>
          {props.amount}
        </Text>
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
    paddingVertical: 24,
    width: 500,
    minHeight: "88%",
  },
  orderNo: {
    flexDirection: "row",
    paddingBottom: 12,
    justifyContent: "space-between",
  },
  quantityColumn: {
    width: "10%",
  },
  itemColumn: {
    width: "70%",
  },
  priceColumn: {
    width: "20%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  taxColumn: {
    width: "80%",
    paddingLeft: 200,
  },
  underlinedRow: {
    flexDirection: "row",
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomColor: "#D2D2D2",
    borderBottomWidth: 0.5,
  },
  row: {
    flexDirection: "row",
  },
  customerNotesRow: {
    marginTop: 16,
  },
})
