import "@testing-library/react-native/extend-expect"
import { render, screen } from "@testing-library/react-native"

import { MenuCategories } from "@lib/sample-data"
import MenuCategories from "@components/menu/MenuCategories"

describe("<MenuCategories />", () => {
  it("renders given menu categories", () => {
    const categories = MenuCategories
    render(<MenuCategories categories={categories} />)
    const categoryButtons = screen.getAllByRole("button")
    expect(categoryButtons).toHaveLength(categories.length)
    for (const category of categories) {
      const button = screen.getByRole("button", { name: category })
      expect(button).toBeVisible()
    }
  })
})
