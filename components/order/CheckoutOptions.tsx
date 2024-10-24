import { FC, useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"

import CheckOutButton from "../common/CheckOutButton"
import Colors from "@constants/colors"
import textStyles from "@constants/textStyles"

type CheckoutOptionsProps = {
  total: number
}

const generateCheckoutOptions = (total: number): number[] => {
  let optionsSet = new Set<number>()

  // Calculate checkout options (i.e., possible amounts tendered by customers)
  // Options include the exact amount, an amount rounded to the nearest dollar, 5 dollars, 10 dollars, ... etc.
  // Ensure that the options are unique
  optionsSet.add(total) // Exact total
  optionsSet.add(Math.round(total)) // Rounded to nearest dollar
  optionsSet.add(Math.ceil(total / 5) * 5) // Rounded to nearest 5th
  optionsSet.add(Math.ceil(total / 10) * 10) // Rounded to nearest 10th
  optionsSet.add(Math.ceil(total / 20) * 20) // Rounded to nearest 20th
  optionsSet.add(Math.ceil(total / 50) * 50) // Rounded to nearest 50th

  // Convert the set to a sorted array
  const optionsList = [...optionsSet].sort((a, b) => a - b)

  // Limit to a maximum of 4 checkout options
  return optionsList.slice(0, 4)
}

const CheckoutOptions: FC<CheckoutOptionsProps> = ({ total }) => {
  // Calculate the current date and time
  const date = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
  const checkoutOptions = generateCheckoutOptions(total)

  return (
    <View style={styles.background}>
      <View style={styles.dateAndTotalAmountRow}>
        <Text style={{ fontSize: 18 }}>{date}</Text>
        <Text style={textStyles.bold}>{total}</Text>
      </View>
      <View style={[styles.checkoutOptionsRow, { marginBottom: 4 }]}>
        <CheckOutButton buttonName="Cash" />
        <CheckOutButton buttonName="Card" />
      </View>
      <View style={styles.checkoutOptionsRow}>
        {checkoutOptions.map((option) => (
          <CheckOutButton key={option} buttonName={`${option.toFixed(2)}`} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.checkoutOptionsGray,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: 500,
    padding: 16,
  },
  dateAndTotalAmountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  checkoutOptionsRow: {
    flexDirection: "row",
  },
})

export default CheckoutOptions
