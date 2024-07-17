import "@testing-library/react-native/extend-expect"
import { render, screen, userEvent } from "@testing-library/react-native"
import { OrderItem, OrderItemProps } from "@components/OrderItem"

describe("<OrderItem />", () => {
  const { name, quantity, price }: OrderItemProps = {
    name: "Ham Sandwich",
    quantity: 1,
    price: 1,
  }

  it("shows details of given order item", () => {
    render(<OrderItem name={name} quantity={quantity} price={price} />)

    const nameText = screen.getByRole("text", { name: "name" })
    const priceText = screen.getByRole("text", { name: "price" })
    const quantityText = screen.getByRole("text", { name: "quantity" })

    expect(nameText).toBeVisible()
    expect(priceText).toBeVisible()
    expect(quantityText).toBeVisible()
  })

  it("has a delete button", () => {
    render(<OrderItem name={name} quantity={quantity} price={price} />)
    const deleteButton = screen.getByRole("button")
    expect(deleteButton).toHaveTextContent("Delete")
  })

  describe("Delete button", () => {
    it("deletes the item when pressed", async () => {
      jest.useFakeTimers()
      const onDelete = jest.fn()
      render(
        <OrderItem
          name={name}
          quantity={quantity}
          price={price}
          onDelete={onDelete}
        />
      )
      const deleteButton = screen.getByRole("button")
      const user = userEvent.setup()
      await user.press(deleteButton)
      expect(onDelete).toHaveBeenCalledTimes(1)
    })
  })
})
