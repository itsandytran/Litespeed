import "@testing-library/react-native/extend-expect"
import { render, screen } from "@testing-library/react-native"

import { sampleMenuItems } from "@lib/sample-data"
import MenuItem from "@components/MenuItem"

describe("<MenuItem />", () => {
  const { name, price, color } = sampleMenuItems[0]

  it("shows the name and price", () => {
    render(<MenuItem name={name} price={price} color={color} />)

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
