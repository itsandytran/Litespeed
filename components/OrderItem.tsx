import { FC } from "react"
import { Text, View } from "react-native"

export type OrderItemProps = {
  name: string
  quantity: number
  price: number
}

export const OrderItem: FC<OrderItemProps> = ({ name, quantity, price }) => {
  return (
    <View>
      <Text aria-label="quantity">{quantity}</Text>
      <Text aria-label="name">{name}</Text>
      <Text aria-label="price">{price}</Text>
    </View>
  )
}
