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
    <View>
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
    <Text aria-label="name" style={[style.text]}>
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
    <Text
      aria-label="price"
      style={[style.text, style.number, style.itemPrice]}
    >
      {price}
    </Text>
  )

  const quantityText = (
    <Text
      aria-label="quantity"
      style={[style.text, style.number, style.itemQuantity]}
    >
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
      style={[
        style.deleteButton,
        {
          opacity: 0,
        },
      ]}
    >
      <Text style={[style.text, style.deleteButtonText]}>Delete</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  orderItem: {
    borderBottomColor: "darkgray",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  itemNameAndInstructions: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  itemInstructions: {
    color: "darkgray",
  },
  itemPrice: {
    width: "12%",
  },
  itemQuantity: {
    width: "8%",
  },
  deleteButton: {
    backgroundColor: "red",
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 8,
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
  number: {
    textAlign: "right",
  },
})
