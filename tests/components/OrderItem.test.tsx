import "@testing-library/react-native/extend-expect"
import { render, screen } from "@testing-library/react-native"
import { OrderItem, OrderItemProps } from "@components/OrderItem"

describe("<OrderItem />", () => {
  it("shows details of given order item", () => {
    const { name, quantity, price }: OrderItemProps = {
      name: "Ham Sandwich",
      quantity: 1,
      price: 1,
    }

    render(<OrderItem name={name} quantity={quantity} price={price} />)

    const nameText = screen.getByRole("text", { name: "name" })
    const priceText = screen.getByRole("text", { name: "price" })
    const quantityText = screen.getByRole("text", { name: "quantity" })

    expect(nameText).toBeVisible()
    expect(priceText).toBeVisible()
    expect(quantityText).toBeVisible()
  })
})
