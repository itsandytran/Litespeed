import "@testing-library/react-native/extend-expect"
import { render, screen } from "@testing-library/react-native"

import { sampleMenuItems } from "@lib/sample-data"
import MenuItem from "@components/menu/MenuItem"

describe("<MenuItem />", () => {
  const { name, price, color } = sampleMenuItems[0]

  beforeEach(() => {
    render(<MenuItem name={name} price={price} color={color} />)
  })

  it('is labeled as "menu item"', () => {
    const item = screen.root
    expect(item).toHaveAccessibleName("menu item")
  })

  it("shows the name and price", () => {
    const nameText = screen.getByRole("text", { name: "name" })
    const priceText = screen.getByRole("text", { name: "price" })

    expect(nameText).toBeVisible()
    expect(priceText).toBeVisible()

    expect(nameText).toHaveTextContent(name)
    expect(priceText).toHaveTextContent(`${price}`)
  })

  it("has the background color set", () => {
    render(<MenuItem name={name} price={price} color={color} />)
    const view = screen.root
    expect(view).toHaveStyle({ backgroundColor: color })
  })
})
