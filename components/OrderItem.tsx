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
        item={{ name, price, quantity }}
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
  return (
    <View>
      <View style={[style.orderItem]}>
        <Text
          aria-label="quantity"
          style={[
            style.text,
            style.number,
            {
              flexGrow: 0,
            },
          ]}
        >
          {quantity}
        </Text>
        <Text
          aria-label="name"
          style={[
            style.text,
            {
              flexGrow: 0.8,
            },
          ]}
        >
          {name}
        </Text>
        <Text
          aria-label="price"
          style={[
            style.text,
            style.number,
            {
              flexGrow: 0,
            },
          ]}
        >
          {price}
        </Text>
      </View>
      {specialInstructions && (
        <View>
          <Text aria-label="instructions" style={[style.text]}>
            {specialInstructions}
          </Text>
        </View>
      )}
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
