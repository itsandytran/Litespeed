import "@testing-library/react-native/extend-expect"
import { render, screen } from "@testing-library/react-native"

import { sampleMenuItems } from "@lib/sample-data"
import Menu from "@components/menu/Menu"

describe("<Menu />", () => {
  const items = sampleMenuItems

  it("shows given menu items", () => {
    render(<Menu items={items} />)
    const menuItems = screen.getAllByLabelText("menu item")
    expect(menuItems).toHaveLength(items.length)
  })
})
