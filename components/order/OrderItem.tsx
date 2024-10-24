import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"

import { OrderItemType } from "@lib/sample-data"
import Button from "../common/Button"

export type OrderItemProps = OrderItemType & OnDeleteCallBack<OrderItemType>

export type OnDeleteCallBack<T> = {
  onDelete?: (item: T) => void
}

export const OrderItem: FC<OrderItemProps> = ({
  menuItem,
  quantity,
  addOns: customizationOptions,
  onDelete,
}) => {
  return (
    <View>
      <OrderItemDetails
        menuItem={menuItem}
        quantity={quantity}
        addOns={customizationOptions}
      />
      <OrderItemDeleteButton
        onDelete={onDelete}
        item={{ menuItem, quantity, addOns: customizationOptions }}
      />
    </View>
  )
}

const OrderItemDetails: FC<OrderItemType> = ({
  menuItem,
  quantity,
  addOns: customizationOptions = [],
}) => {
  const nameText = (
    <Text aria-label="name" style={[style.text]}>
      {menuItem.name}
    </Text>
  )

  const itemCustomizationText = customizationOptions.length > 0 && (
    <Text
      aria-label="item customization"
      style={[style.text, style.itemCustomization]}
    >
      {customizationOptions.map((option) => option.name).join(", ")}
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
> = ({ onDelete, item }) => (
  <Button
    action={() => {
      if (onDelete) onDelete(item)
    }}
    buttonStyle={[
      style.deleteButton,
      {
        opacity: 0,
      },
    ]}
    text="Delete"
    textStyle={[style.text, style.deleteButtonText]}
  />
)

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
    width: "65%",
  },
  itemCustomization: {
    color: "darkgray",
  },
  itemPrice: {
    width: "18%",
  },
  itemQuantity: {
    width: "9%",
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
