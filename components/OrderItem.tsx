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
    <View style={style.container}>
      <Text aria-label="quantity" style={style.number}>
        {quantity}
      </Text>
      <Text aria-label="name">{name}</Text>
      <Text aria-label="price" style={style.number}>
        {price}
      </Text>
      <Pressable
        onPress={onDelete ? onDelete : () => {}}
        role="button"
        style={style.deleteButton}
      >
        <Text>Delete</Text>
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 250,
    padding: 4,
  },
  number: {
    flexBasis: 18,
    textAlign: "right",
  },
  deleteButton: {
    backgroundColor: "red",
  },
})
