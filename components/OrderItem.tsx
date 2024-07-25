import { FC } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

import { OrderItemType } from "@lib/sample-data"
import Keyed from "@lib/keyed"

export type OrderItemProps = OrderItemType &
  Keyed<string> &
  OnDeleteCallBack<OrderItemType>

export type OnDeleteCallBack<T> = {
  onDelete?: (item: T) => void
}

export const OrderItem: FC<OrderItemProps> = (item) => {
  const { menuItem, quantity, itemCustomization, onDelete } = item
  return (
    <View>
      <OrderItemDetails
        menuItem={menuItem}
        quantity={quantity}
        itemCustomization={itemCustomization}
      />
      <OrderItemDeleteButton onDelete={onDelete} item={item} />
    </View>
  )
}

const OrderItemDetails: FC<OrderItemType> = ({
  menuItem,
  quantity,
  itemCustomization,
}) => {
  const nameText = (
    <Text aria-label="name" style={[style.text]}>
      {menuItem.name}
    </Text>
  )

  const itemCustomizationText = itemCustomization && (
    <Text
      aria-label="item customization"
      style={[style.text, style.itemCustomization]}
    >
      {itemCustomization}
    </Text>
  )

  const priceText = (
    <Text
      aria-label="price"
      style={[style.text, style.number, style.itemPrice]}
    >
      {menuItem.price}
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
        {itemCustomizationText}
      </View>
      {priceText}
    </View>
  )
}

const OrderItemDeleteButton: FC<
  OnDeleteCallBack<OrderItemType> & { item: OrderItemType }
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
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemNameAndInstructions: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  itemCustomization: {
    color: "darkgray",
  },
  itemPrice: {
    width: "12%",
  },
  itemQuantity: {
    width: "6%",
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
