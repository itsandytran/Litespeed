import "@testing-library/react-native/extend-expect"
import { render, screen, userEvent } from "@testing-library/react-native"

import { OrderItem } from "@components/order/OrderItem"
import { sampleCustomizationOptions, sampleOrderItems } from "@lib/sample-data"

describe("<OrderItem />", () => {
  const { menuItem, quantity } = sampleOrderItems[0]
  const { name, price } = menuItem

  it("shows details of given order item", () => {
    render(<OrderItem menuItem={menuItem} quantity={quantity} />)

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
    const customizationOptions = [
      sampleCustomizationOptions[0],
      sampleCustomizationOptions[1],
      sampleCustomizationOptions[2],
    ]

    const optionsText = customizationOptions
      .map((option) => option.name)
      .join(", ")

    render(
      <OrderItem
        menuItem={menuItem}
        quantity={quantity}
        customizationOptions={customizationOptions}
      />
    )

    const customizationText = screen.getByRole("text", {
      name: "item customization",
    })
    expect(customizationText).toBeVisible()
    expect(customizationText).toHaveTextContent(optionsText)
  })

  it("has a delete button", () => {
    render(<OrderItem menuItem={menuItem} quantity={quantity} />)
    const deleteButton = screen.getByRole("button")
    expect(deleteButton).toHaveTextContent("Delete")
  })

  describe("Delete button", () => {
    const onDelete = jest.fn()

    beforeEach(() => {
      jest.useFakeTimers()
      render(
        <OrderItem
          menuItem={menuItem}
          quantity={quantity}
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
