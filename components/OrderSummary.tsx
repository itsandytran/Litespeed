import { View, Text, StyleSheet } from "react-native"

import CheckOutButtons from "./CheckOutButtons"
import { OrderItem, OrderItemDetails } from "./OrderItem"
import Colors from "../constants/colors"
import CustomerInstructions from "./CustomerInstructions"

const sampleData: OrderItemDetails[] = [
  {
    name: "Poutine",
    price: 7,
    quantity: 1,
    specialInstructions: "more gravy",
  },
  {
    name: "Ham Burger",
    price: 7.5,
    quantity: 2,
  },
  {
    name: "Ham Burger",
    price: 7.5,
    quantity: 1,
    specialInstructions: "add tomato",
  },
  {
    name: "Deep Fried Cheese Curds",
    price: 10,
    quantity: 1,
  },
]

function OrderSummary() {
  const orderItems = sampleData.map((item) => {
    const { name, price, quantity, specialInstructions } = item
    return (
      <OrderItem
        name={name}
        price={price}
        quantity={quantity}
        specialInstructions={specialInstructions}
      />
    )
  })
  return (
    <View style={styles.background}>
      <View>
        <View style={styles.OrderNumberContainer}>
          <Text style={styles.OrderNumberText}>Order no. 123</Text>
        </View>
        <View style={styles.OrderNumberContainer}>
          <OrderItem name="Ham Burger" quantity={4} price={50.0} />
        </View>
        <View style={styles.OrderNumberContainer}>
          <OrderItem name="Ham Burger" quantity={4} price={50.0} />
        </View>
        <View style={styles.OrderNumberContainer}>
          <OrderItem name="Ham Burger" quantity={4} price={50.0} />
        </View>
        <CustomerInstructions />
      </View>
      <View>
        <CheckOutButtons />
      </View>
    </View>
  )
}

export default OrderSummary

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.gray1,
    justifyContent: "space-between",
  },
  OrderNumberContainer: {
    borderBottomColor: Colors.gray3,
    borderBottomWidth: 2,
  },
  OrderNumberText: {
    padding: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
})
