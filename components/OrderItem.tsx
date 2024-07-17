import { FC } from "react"
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"

export type OrderItemProps = {
  name: string
  quantity: number
  price: number
  onDelete?: (event: GestureResponderEvent) => void
}

export const OrderItem: FC<OrderItemProps> = ({
  name,
  quantity,
  price,
  onDelete,
}) => {
  return (
    <View>
      <View style={[style.orderItem]}>
        <Text aria-label="quantity" style={[style.text, style.number]}>
          {quantity}
        </Text>
        <Text aria-label="name" style={[style.text]}>
          {name}
        </Text>
        <Text aria-label="price" style={[style.text, style.number]}>
          {price}
        </Text>
      </View>
      <Pressable
        onPress={onDelete ? onDelete : () => {}}
        role="button"
        style={style.deleteButton}
      >
        <Text
          style={[
            style.text,
            {
              color: "white",
            },
          ]}
        >
          Delete
        </Text>
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  orderItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    padding: 8,
  },
  number: {
    flexBasis: 32,
    textAlign: "right",
  },
  text: {
    fontSize: 22,
  },
})
