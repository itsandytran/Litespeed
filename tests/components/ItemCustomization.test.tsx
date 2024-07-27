import "@testing-library/react-native/extend-expect"
import { render, screen } from "@testing-library/react-native"

import ItemCustomization from "@components/ItemCustomization"

describe("<ItemCustomization />", () => {
  it("is not shown by default", () => {
    render(<ItemCustomization itemName="Test" options={[]} />)
    const view = screen.root
    expect(view).toBeUndefined()
  })
})
