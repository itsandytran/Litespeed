import { FC } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

export type OrderItemProps = OrderItemDetails &
  OnDeleteCallBack<OrderItemDetails>

export type OrderItemDetails = {
  name: string
  quantity: number
  price: number
  specialInstructions?: string
}

export type OnDeleteCallBack<T> = {
  onDelete?: (item: T) => void
}

export const OrderItem: FC<OrderItemProps> = ({
  name,
  quantity,
  price,
  specialInstructions,
  onDelete,
}) => {
  return (
    <View style={style.container}>
      <OrderItemDetails
        name={name}
        price={price}
        quantity={quantity}
        specialInstructions={specialInstructions}
      />
      <OrderItemDeleteButton
        onDelete={onDelete}
        item={{ name, price, quantity, specialInstructions }}
      />
    </View>
  )
}

const OrderItemDetails: FC<OrderItemDetails> = ({
  name,
  price,
  quantity,
  specialInstructions,
}) => {
  const nameText = (
    <Text aria-label="name" style={[style.text, style.itemName]}>
      {name}
    </Text>
  )
  const specialInstructionsText = specialInstructions && (
    <Text
      aria-label="instructions"
      style={[style.text, style.itemInstructions]}
    >
      {specialInstructions}
    </Text>
  )
  const priceText = (
    <Text aria-label="price" style={[style.text, style.numbers]}>
      {price}
    </Text>
  )
  const quantityText = (
    <Text aria-label="quantity" style={[style.text, style.numbers]}>
      {quantity}
    </Text>
  )
  return (
    <View style={[style.orderItem]}>
      {quantityText}
      <View style={[style.itemNameAndInstructions]}>
        {nameText}
        {specialInstructionsText}
      </View>
      {priceText}
    </View>
  )
}

const OrderItemDeleteButton: FC<
  OnDeleteCallBack<OrderItemDetails> & {
    item: OrderItemDetails
  }
> = ({ onDelete, item }) => {
  return (
    <Pressable
      onPress={() => {
        if (onDelete) onDelete(item)
      }}
      role="button"
      style={[style.deleteButton]}
    >
      <Text style={[style.text, style.deleteButtonText]}>Delete</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  container: {},
  orderItem: {
    display: "flex",
    flexDirection: "row",
  },
  itemNameAndInstructions: {
    display: "flex",
    flexDirection: "column",
  },
  itemName: {},
  itemInstructions: {
    color: "darkgray",
  },
  deleteButton: {
    backgroundColor: "red",
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    zIndex: -1,
  },
  deleteButtonText: {
    color: "white",
  },
  text: {
    fontSize: 22,
  },
  numbers: {
    textAlign: "right",
  },
})
