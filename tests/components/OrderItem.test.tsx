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

    expect(nameText).toHaveTextContent(name)
    expect(priceText).toHaveTextContent(`${price}`)
    expect(quantityText).toHaveTextContent(`${quantity}`)
  })

  it("shows special instructions when specified", () => {
    const instructions = "add tomato, no onions"
    render(
      <OrderItem
        name={name}
        quantity={quantity}
        price={price}
        specialInstructions={instructions}
      />
    )

    const instructionsText = screen.getByRole("text", { name: "instructions" })
    expect(instructionsText).toBeVisible()
    expect(instructionsText).toHaveTextContent(instructions)
  })

  it("has a delete button", () => {
    render(<OrderItem name={name} quantity={quantity} price={price} />)
    const deleteButton = screen.getByRole("button")
    expect(deleteButton).toHaveTextContent("Delete")
  })

  describe("Delete button", () => {
    const onDelete = jest.fn()

    beforeEach(() => {
      jest.useFakeTimers()
      render(
        <OrderItem
          name={name}
          quantity={quantity}
          price={price}
          onDelete={onDelete}
        />
      )
    })

    it("deletes the item when pressed", async () => {
      const deleteButton = screen.getByRole("button")
      const user = userEvent.setup()
      await user.press(deleteButton)
      expect(onDelete).toHaveBeenCalledTimes(1)
    })

    it("has a red background color", () => {
      const deleteButton = screen.getByRole("button")
      expect(deleteButton).toHaveStyle({ backgroundColor: "red" })
    })

    it("is hidden by default", () => {
      const deleteButton = screen.getByRole("button")
      expect(deleteButton).not.toBeVisible()
    })
  })
})
